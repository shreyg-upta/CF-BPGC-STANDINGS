data = [
  {
    name: "BPGC23",
    id: "2acacdb25f059dc84d6d7f833a0c8abb",
  },
  {
    name: "SPOJmentees",
    id: "8122dc0cffa3c2693f67c5e0ccc912b7",
  },
  {
    name: "QSTP24",
    id: "9c014df584a90ac222d19d8c404ddeef",
  },
  {
    name: "BPGC23pups",
    id: "12f97eb1df2815e63e9d0a6c1d542d90",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const options = document.getElementById("options");

  function handleButtonClick(button) {
    button.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var tabUrl = tab.url;
        var arg = tabUrl.split("/");
        if (tabUrl.includes("codeforces.com/contest")) {
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
        }
      });
    });
  }

  for (let i = 0; i < data.length; i++) {
    const button = document.createElement("button");
    button.textContent = data[i].name;
    button.value = data[i].id;
    button.id = data[i].name + "Button";
    button.classList.add("btn");
    button.classList.add("btn-dark");
    options.appendChild(button);
    if (button) {
      handleButtonClick(button);
    } else {
      console.error(button.name + "not found.");
    }
  }
});
