/**
 * @author Marenin Alexander
 */

'use strict';

setTimeout( () => {
    navigator.mediaDevices
        .getUserMedia({
            audio: true,
            video: {
                width: {min: 1024, ideal: 1280, max: 1920},
                height: {min: 640, ideal: 720, max: 1080}
            }
        })
        .then(function(mediaStream) {
            let video = document.querySelector('video');
            video.srcObject = mediaStream;
            video.onloadedmetadata = e => video.play();
        }).catch(function(error) {
            console.error('navigator.mediaDevices.getUserMedia ::', error);
        });
}, 1000 );