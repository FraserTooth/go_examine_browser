function displayInfo() {
  function onGot(tabInfo) {
    console.log("Inside onGot() ...");
    console.log(tabInfo);
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var gettingCurrent = browser.tabs.getCurrent();
  gettingCurrent.then(onGot, onError);
}

browser.browserAction.onClicked.addListener(displayInfo);
