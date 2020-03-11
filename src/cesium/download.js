function download(Cesium,viewer) {
    let downloadDOM = document.getElementById('download')
    if(downloadDOM){
        downloadDOM.addEventListener("click", function () {
            
            var promise = viewer.scene.outputSceneToFile();
            Cesium.when(promise, function (base64data) {
                download(base64data);
            })
        })
        function convertImageToCanvas(image) {
            var canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            canvas.getContext("2d").drawImage(image, 0, 0);
            return canvas;
        }
        /**
         * 下载图片
         */
        function download(base64data) {
            var image = new Image();
            image.src = base64data;
            image.onload = function () {
                var canvas = convertImageToCanvas(image);
                var url = canvas.toDataURL("image/jpeg");
                var a = document.createElement('a');
                var event = new MouseEvent('click');
                a.download = (new Date()).getTime() + ".jpg"; // 指定下载图片的名称
                a.href = url;
                a.dispatchEvent(event); // 触发超链接的点击事件
            }
        }
    }
    
}

export default download