document.querySelector("button").addEventListener("click", e => {
  function onGot(tabInfo) {
    console.log(tabInfo);
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var gettingCurrent = browser.tabs.getCurrent();
  gettingCurrent.then(onGot, onError);
});
