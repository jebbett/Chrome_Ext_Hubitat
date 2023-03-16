'use strict';

function sendApiOn() {
    chrome.storage.sync.get({
        extAPI: "define"
    }, function(items) {
       fetch(items.extAPI, { method: 'get' })
    }); 
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    chrome.tabs.query({
        active: true,
        currentWindow: true
    },(tabs)=>{
        if(changeInfo.audible) {
		sendApiOn();
        };
    })
})

