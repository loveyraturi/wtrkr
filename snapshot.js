var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
         navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            setTimeout(function(){
                // chrome.tabs.remove(tab.id);
            context.drawImage(video, 0, 0, 640, 480);
            console.log("#####")
            var dt = canvas.toDataURL('image/jpeg');
            this.href = dt;
            // downloadLnk.addEventListener('click', download, false);
            },1000);
            // video.play();

        });
    }

// Trigger photo take
