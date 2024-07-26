document.addEventListener("DOMContentLoaded", function () {
  const bpgc23Button = document.getElementById("bpgc23Button");
  const spojMBButton = document.getElementById("spojMButton");

  function handleButtonClick(button) {
    button.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var tabUrl = tab.url;
        var arg = tabUrl.split("/");
        var listUrl = button.value;
        var newUrl =
          "https://codeforces.com/" +
          arg[3] +
          "/" +
          arg[4] +
          "/standings?list=" +
          listUrl;
        chrome.storage.sync.set({ lastCountryUrl: listUrl });
        chrome.tabs.update(tab.id, { url: newUrl });
      });
    });
  }

  if (bpgc23Button) {
    handleButtonClick(bpgc23Button);
  } else {
    console.error("bpgc23Button with ID 'bpgc23Button' not found.");
  }

  if (spojMBButton) {
    handleButtonClick(spojMBButton);
  } else {
    console.error("spojMBButton with ID 'spojMButton' not found.");
  }
});
