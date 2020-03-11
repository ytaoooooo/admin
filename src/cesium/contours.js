function contours(Cesium, viewer) {
    var hyp = new Cesium.HypsometricSetting();
    //设置分层设色的显示模式为线
    hyp.DisplayMode = Cesium.HypsometricSettingEnum.DisplayMode.LINE;
    //设置线颜色为红色
    hyp._lineColor = new Cesium.Color(1.0, 0.0, 0.0, 1.0);
    //等高线间隔为100m
    hyp.LineInterval = 100.0;
    //设置分层设色的最大/最小可见高度
    hyp.MaxVisibleValue = 9000;
    hyp.MinVisibleValue = 0;
    //设置分层设色颜色表的最大/最小key值,表示在此高度范围内显示颜色表
    hyp.ColorTableMinKey = 2736.88110351563;
    hyp.ColorTableMaxKey = 5597.06640625;
    //新建颜色表
    var colorTable = new Cesium.ColorTable();

    colorTable.insert(5597.06640625, new Cesium.Color(0, 0, 255 / 255));
    colorTable.insert(5406.3873860677086, new Cesium.Color(0, 51 / 255, 255 / 255));
    colorTable.insert(5215.7083658854172, new Cesium.Color(0, 102 / 255, 255 / 255));
    colorTable.insert(5025.0293457031257, new Cesium.Color(0, 153 / 255, 255 / 255));
    colorTable.insert(4834.3503255208343, new Cesium.Color(0, 204 / 255, 255 / 255));
    colorTable.insert(4643.6713053385429, new Cesium.Color(0, 255 / 255, 255 / 255));
    colorTable.insert(4452.9922851562524, new Cesium.Color(51 / 255, 255 / 255, 204 / 255));
    colorTable.insert(4262.3132649739609, new Cesium.Color(102 / 255, 255 / 255, 153 / 255));
    colorTable.insert(4071.6342447916695, new Cesium.Color(153 / 255, 255 / 255, 102 / 255));
    colorTable.insert(3880.9552246093781, new Cesium.Color(204 / 255, 255 / 255, 51 / 255));
    colorTable.insert(3690.2762044270867, new Cesium.Color(255 / 255, 255 / 255, 0));
    colorTable.insert(3499.5971842447952, new Cesium.Color(255 / 255, 204 / 255, 0));
    colorTable.insert(3308.9181640625038, new Cesium.Color(255 / 255, 153 / 255, 0));
    colorTable.insert(3118.2391438802129, new Cesium.Color(255 / 255, 102 / 255, 0));
    colorTable.insert(2927.5601236979214, new Cesium.Color(255 / 255, 51 / 255, 0));
    colorTable.insert(2736.88110351563, new Cesium.Color(255 / 255, 0, 0));

    //设置分层设色的颜色表
    hyp.ColorTable = colorTable;
    //设置分层设色的透明度
    hyp.Opacity = 0.4;


    const noContoursDOM = document.getElementById('no-contours')
    if(noContoursDOM){
        noContoursDOM.addEventListener('click', () => {
            viewer.scene.globe.HypsometricSetting = undefined
        })
    }
    
    const lineContoursDOM = document.getElementById('line-contours')
    if(lineContoursDOM){
        lineContoursDOM.addEventListener('click', () => {
            hyp.DisplayMode = Cesium.HypsometricSettingEnum.DisplayMode.LINE;
            viewer.scene.globe.HypsometricSetting = {
                hypsometricSetting: hyp,
                analysisMode: Cesium.HypsometricSettingEnum.AnalysisRegionMode.ARM_ALL
            };
        })
    }
    

    const surfaceContoursDOM = document.getElementById('surface-contours')
    if(surfaceContoursDOM){
        surfaceContoursDOM.addEventListener('click', () => {
            hyp.DisplayMode = Cesium.HypsometricSettingEnum.DisplayMode.FACE;
            viewer.scene.globe.HypsometricSetting = {
                hypsometricSetting: hyp,
                analysisMode: Cesium.HypsometricSettingEnum.AnalysisRegionMode.ARM_ALL
            };
        })
    }
    


    const bothContoursDOM = document.getElementById('both-contours')
    if(bothContoursDOM){
        bothContoursDOM.addEventListener('click', () => {
            hyp.DisplayMode = Cesium.HypsometricSettingEnum.DisplayMode.FACE_AND_LINE;
            viewer.scene.globe.HypsometricSetting = {
                hypsometricSetting: hyp,
                analysisMode: Cesium.HypsometricSettingEnum.AnalysisRegionMode.ARM_ALL
            };
        })
    }
    
}


export default contours