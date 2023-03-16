'use strict';

function sendApiOn() {
    chrome.storage.sync.get({
        extAPI: "define"
    }, function(items) {
       fetch(items.extAPI, { method: 'get' })
    }); 
}

function sendApiOff() {
    chrome.storage.sync.get({
        extAPI: "define"
    }, function(items) {
       fetch(items.extAPI.replace("/on?", "/off?"), { method: 'get' })
    }); 
}

document.getElementById('on').addEventListener('click', sendApiOn);
document.getElementById('off').addEventListener('click', sendApiOff);






