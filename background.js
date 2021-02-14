chrome.tabs.onUpdated.addListener(function (tabId,changeInfo) {
  chrome.scripting.executeScript({
    target: {tabId, allFrames: true},
    files: ["content.js"]
  });
})

