chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.storage.sync.get({urls: []}, items => {
    for (var url of items.urls)  {
      if (tab.url.startsWith(url) && changeInfo.status == "complete") {
        chrome.tabs.executeScript(tabId, {code: "window.ExtO365DN_injected"}, result => {
          if (!result[0]) {
            chrome.tabs.executeScript(tabId, {file: "index.js"}, null);
          }
        });
        break;
      }
    };
  });
});
