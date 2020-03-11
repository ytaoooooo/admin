// import measure from './cesium/measure'
import rotate from './cesium/rotate'
import download from './cesium/download'
import contours from './cesium/contours'
import site from './cesium/site'

var cesiumPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let Cesium = window.Cesium
        resolve(Cesium)
    }, 2500)
})

cesiumPromise.then((Cesium) => {
    // 去掉logo
    setTimeout(() => {
        var superMapImg = document.getElementsByClassName('cesium-widget-credits')[0]
        if (superMapImg) {
            superMapImg.remove();
        }
    }, 100)
    var cesiumDOM = document.getElementById('cesiumContainer')

    if (cesiumDOM && Cesium) {
        // var viewer = new Cesium.Viewer('cesiumContainer', {
        //     // 创建地形服务提供者的实例，url为SuperMap iServer发布的TIN地形服务
        //     terrainProvider: new Cesium.CesiumTerrainProvider({
        //         url: window.URL_CONFIG.ZF_TERRAIN,
        //         isSct: true//地形服务源自SuperMap iServer发布时需设置isSct为true
        //     })
        // });
        // // var scene = viewer.scene;
        // // 添加SuperMap iServer发布的影像服务
        // viewer.imageryLayers.addImageryProvider(new Cesium.SuperMapImageryProvider({
        //     url: window.URL_CONFIG.ZF_IMG
        // }));

        // // 设置相机位置、视角
        // viewer.scene.camera.setView({
        //     destination: new Cesium.Cartesian3(-1206939.1925299785, 5337998.241228442, 3286279.2424502545),
        //     orientation: {
        //         heading: 1.4059101895600987,
        //         pitch: -0.20917672793046682,
        //         roll: 2.708944180085382e-13
        //     }
        // });
        var viewer = new Cesium.Viewer('cesiumContainer');
        viewer.imageryLayers.addImageryProvider(new Cesium.BingMapsImageryProvider({
            url: 'https://dev.virtualearth.net',
            mapStyle: Cesium.BingMapsStyle.AERIAL,
            key: window.URL_CONFIG.BING_MAP_KEY
        }));
        var scene = viewer.scene;
        var widget = viewer.cesiumWidget;
        try {
            //打开所发布三维服务下的所有图层
            var promise = scene.open(window.URL_CONFIG.SCENE_CBD);
            Cesium.when(promise, function (layers) {
                //设置相机位置、视角，便于观察场景
                scene.camera.setView({
                    destination: new Cesium.Cartesian3.fromDegrees(116.4563, 39.8969, 553),
                    orientation: {
                        heading: 5.901089214916513,
                        pitch: -0.40668579780875524,
                        roll: 6.281842456812987
                    }
                });
                for (var i = 0; i < layers.length; i++) {
                    layers[i].selectEnabled = false;
                }

                if (!scene.pickPositionSupported) {
                    alert('不支持深度纹理,无法拾取位置！');
                }
            }, function (e) {
                if (widget._showRenderLoopErrors) {
                    var title = '加载SCP失败，请检查网络连接状态或者url地址是否正确？';
                    widget.showErrorPanel(title, undefined, e);
                }
            });
        }
        catch (e) {
            if (widget._showRenderLoopErrors) {
                var title = '渲染时发生错误，已停止渲染。';
                widget.showErrorPanel(title, undefined, e);
            }
        }

        // measure(Cesium, viewer)
        rotate(Cesium, viewer)
        download(Cesium, viewer)

        contours(Cesium, viewer)
        site(Cesium, viewer)
    }

})


export default cesiumPromise



