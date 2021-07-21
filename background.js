var url=chrome.runtime.getURL("snapshot.html");
chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled...');
  chrome.alarms.create('refresh', { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "refresh") {
    console.log("@@@@@@@@@@@")
    execute()
  }
});

function execute() {
  chrome.history.search({
    'text': '',
    'startTime': 36000,
    'maxResults': 100
  },
    function (historyItems) {
      console.log("##############", historyItems);
      // For each history item, get details on all visits.
      for (var i = 0; i < historyItems.length; ++i) {
        var url = historyItems[i].url;
        console.log(`history url ${url}`);
      }
    })
  chrome.tabs.create({url: url, active: false }, tab =>{
      setTimeout(function(){
          // chrome.tabs.remove(tab.id);
      },10000);
  });
}

