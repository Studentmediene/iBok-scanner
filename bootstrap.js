// Some browsers use prefixes
navigator.getUserMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

// Let's start the demonstration on page load
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
            var video = document.createElement('video'),
                context = document.querySelector('canvas').getContext('2d');

            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();

            window.setInterval(function () {
                context.drawImage(video, 0, 0);
            }, 1000);

        },
        function (error) {
            alert('Feil! ' + error);
        }
    );
});
