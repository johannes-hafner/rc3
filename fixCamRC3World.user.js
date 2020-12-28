// ==UserScript==
// @run-at document-start
// @match *://*.at.rc3.world/*
// ==/UserScript==

function patch() {
    console.log("Patching functions...");
    let oldGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    window.navigator.mediaDevices.getUserMedia = c => {
        return oldGetUserMedia(c).catch(e => {
            if (e.name=="NotReadableError") {
                console.log("Patching getUserMedia with just audio");
                c = {audio : c.audio, video: false};
                return navigator.mediaDevices.getUserMedia(c);
            }
            throw e;
        })
    }
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ patch +')();'));
(document.body || document.head || document.documentElement).appendChild(script);