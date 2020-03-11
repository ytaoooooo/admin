function site(Cesium,viewer) {
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

    //设置鼠标左键单击回调事件
    handler.setInputAction(function (e) {
        //首先移除之前添加的点
        viewer.entities.removeAll();
        //获取点击位置笛卡尔坐标
        var position = viewer.scene.pickPosition(e.position);

        //将笛卡尔坐标转化为经纬度坐标
        var cartographic = Cesium.Cartographic.fromCartesian(position);
        var longitude = Cesium.Math.toDegrees(cartographic.longitude);
        var latitude = Cesium.Math.toDegrees(cartographic.latitude);
        var height = cartographic.height;
        if (height < 0) {
            height = 0;
        }

        //创建弹出框信息
        var entity = new Cesium.Entity({
            name: "位置信息",
            description: createDescription(Cesium, [longitude, latitude, height])
        });
        viewer.selectedEntity = entity;

        //在点击位置添加对应点
        viewer.entities.add(new Cesium.Entity({
            point: new Cesium.PointGraphics({
                color: new Cesium.Color(1, 1, 0),
                pixelSize: 10,
                outlineColor: new Cesium.Color(0, 1, 1)
            }),
            position: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 0.5)
        }));
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    //创建描述位置的对话框
    function createDescription(Cesium, properties) {
        var simpleStyleIdentifiers = ['经度', '纬度', '高度'];
        var html = '';
        for (var key in properties) {
            if (properties.hasOwnProperty(key)) {
                if (simpleStyleIdentifiers.indexOf(key) !== -1) {
                    continue;
                }
                var value = properties[key];
                if (Cesium.defined(value) && value !== '') {
                    html += '<tr><td>' + simpleStyleIdentifiers[key] + '</td><td>' + value + '</td></tr>';
                }
            }
        }
        if (html.length > 0) {
            html = '<table class="zebra"><tbody>' + html + '</tbody></table>';
        }
        return html;
    }
}

export default site