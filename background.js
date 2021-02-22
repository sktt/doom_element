chrome.tabs.onUpdated.addListener(function (tabId,changeInfo, {url}) {
  if (url.startsWith("chrome://")) return;
  chrome.scripting.executeScript({
    target: {tabId, allFrames: true},
    files: ["content.js"]
  });
})
