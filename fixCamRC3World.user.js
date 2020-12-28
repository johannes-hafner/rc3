// ==UserScript==
// @run-at document-start
// @match *://*.at.rc3.world/*
// @match *://jitsi.rc3.world/*
// @match *://*.infra.run/html5client
// ==/UserScript==

function patch() {
    console.log("Patching functions...");
    let oldGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    window.navigator.mediaDevices.getUserMedia = c => {
        return oldGetUserMedia(c).catch(e => {
            if (e.name=="NotReadableError") {
                console.log("Patching getUserMedia with just audio");
                c = {audio : true, video: false};
                return navigator.mediaDevices.getUserMedia(c);
            }
            throw e;
        })
    }
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ patch +')();'));
(document.body || document.head || document.documentElement).appendChild(script);
