navigator.getUserMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

window.addEventListener('load', function () {

    if (!navigator.getUserMedia) {
        alert('Auch! Ikke støttet!');
        return;
    }

    navigator.getUserMedia(
        {
            video: true,
            audio: false
        },
        function (localMediaStream) {
            //var video = document.querySelector('#output');
            var video = document.createElement('video');
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();

            window.stream = localMediaStream;

            var context = document.querySelector('canvas').getContext('2d');
            window.setInterval(function () {
                context.drawImage(video, 0, 0);
            }, 2000);

        },
        function (error) {
            alert('Feil! ' + error);
        }
    );
});
