function rotate(Cesium, viewer) {
    var camera = viewer.scene.camera;
    camera.flyCircleLoop = true; // 相机绕点旋转开启循环模式
    var center = new Cesium.Cartesian3(0, 0, 0);
    var handlerPoint = new Cesium.DrawHandler(viewer, Cesium.DrawMode.Point);
    handlerPoint.drawEvt.addEventListener(function (result) {
        center = result.object.position;
        camera.flyCircle(center); // 相机绕中心点旋转
    });

    let startDOM = document.getElementById('rotate-start')
    if (startDOM) {
        startDOM.addEventListener('click', () => {
            handlerPoint.activate();
        })
    }
    let stopDOM = document.getElementById('rotate-stop')
    if (stopDOM) {
        stopDOM.addEventListener('click', () => {
            camera.stopFlyCircle(); // 停止相机绕中心点旋转
        })
    }
}

export default rotate