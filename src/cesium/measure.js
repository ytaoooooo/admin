function measure(Cesium, viewer){
    var clampMode = 0; // 空间模式
    //初始化测量距离
    var handlerDis = new Cesium.MeasureHandler(viewer, Cesium.MeasureMode.Distance, clampMode);

    //注册测距功能事件
    handlerDis.measureEvt.addEventListener(function (result) {
        var dis = Number(result.distance);
        var distance = dis > 1000 ? (dis / 1000).toFixed(2) + 'km' : dis.toFixed(2) + 'm';
        handlerDis.disLabel.text = '距离:' + distance;

    });
    handlerDis.activeEvt.addEventListener(function (isActive) {
        if (isActive === true) {
            viewer.enableCursorStyle = false;
            viewer._element.style.cursor = '';

            // $('body').removeClass('measureCur').addClass('measureCur');
        }
        else {
            viewer.enableCursorStyle = true;
            // $('body').removeClass('measureCur');
        }
    });

    //初始化测量面积
    var handlerArea = new Cesium.MeasureHandler(viewer, Cesium.MeasureMode.Area, clampMode);
    handlerArea.measureEvt.addEventListener(function (result) {
        var mj = Number(result.area);
        var area = mj > 1000000 ? (mj / 1000000).toFixed(2) + 'km²' : mj.toFixed(2) + '㎡'
        handlerArea.areaLabel.text = '面积:' + area;
    });
    handlerArea.activeEvt.addEventListener(function (isActive) {
        if (isActive === true) {
            viewer.enableCursorStyle = false;
            viewer._element.style.cursor = '';
            // $('body').removeClass('measureCur').addClass('measureCur');
        }
        else {
            viewer.enableCursorStyle = true;
            // $('body').removeClass('measureCur');
        }
    });

    //初始化测量高度
    var handlerHeight = new Cesium.MeasureHandler(viewer, Cesium.MeasureMode.DVH);
    handlerHeight.measureEvt.addEventListener(function (result) {
        var distance = result.distance > 1000 ? (result.distance / 1000).toFixed(2) + 'km' : result.distance + 'm';
        var vHeight = result.verticalHeight > 1000 ? (result.verticalHeight / 1000).toFixed(2) + 'km' : result.verticalHeight + 'm';
        var hDistance = result.horizontalDistance > 1000 ? (result.horizontalDistance / 1000).toFixed(2) + 'km' : result.horizontalDistance + 'm';
        handlerHeight.disLabel.text = '空间距离:' + distance;
        handlerHeight.vLabel.text = '垂直高度:' + vHeight;
        handlerHeight.hLabel.text = '水平距离:' + hDistance;
    });
    handlerHeight.activeEvt.addEventListener(function (isActive) {
        if (isActive === true) {
            viewer.enableCursorStyle = false;
            viewer._element.style.cursor = '';
            // $('body').removeClass('measureCur').addClass('measureCur');
        }
        else {
            viewer.enableCursorStyle = true;
            // $('body').removeClass('measureCur');
        }
    });

    var measureDOM = document.getElementById('measure')
    if (measureDOM) {
        measureDOM.addEventListener('click', () => {
            setTimeout(() => {
                var disDOM = document.getElementById('distance')
                if (disDOM) {
                    disDOM.addEventListener('click', () => {
                        deactiveAll();
                        handlerDis && handlerDis.activate();
                    })
                }
            });

            setTimeout(() => {
                var clearDOM = document.getElementById('clear')
                if (clearDOM) {
                    clearDOM.addEventListener('click', () => {
                        clearAll();
                    })
                }
            })

            setTimeout(() => {
                var areaDOM = document.getElementById('area')
                if (areaDOM) {
                    areaDOM.addEventListener('click', () => {
                        deactiveAll();
                        handlerArea && handlerArea.activate();
                    })
                }
            })

            setTimeout(() => {
                var heightDOM = document.getElementById('height')
                if (heightDOM) {
                    heightDOM.addEventListener('click', () => {
                        deactiveAll();
                        handlerHeight && handlerHeight.activate();
                    })
                }
            })
        })
    }



    function deactiveAll() {
        handlerDis && handlerDis.deactivate();
        handlerArea && handlerArea.deactivate();
        handlerHeight && handlerHeight.clear();
    }

    function clearAll() {
        handlerDis && handlerDis.clear();
        handlerArea && handlerArea.clear();
        handlerHeight && handlerHeight.deactivate();
    }
}


export default measure