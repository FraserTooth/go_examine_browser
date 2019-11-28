//var browser = require("webextension-polyfill/dist/browser-polyfill.min");

const goExamineApiUrl =
  "https://us-central1-graphite-bliss-260202.cloudfunctions.net/AnalyseWebpage";

document.querySelectorAll("p")[0].style.border = "5px solid red";

console.log("hello");

// function onGot(tabInfo) {
//   console.log(tabInfo);
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

// var gettingCurrent = browser.tabs.getCurrent();
// gettingCurrent.then(onGot, onError);

// const queryObject = {
//   url: "bleh.com"
// }

// function goExamineAPICall() {
//   const response = await fetch(goExamineApiUrl,{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(queryObject) // body data type must match "Content-Type" header
//   });
//   const responseObject = await response.json();
//   console.log(JSON.stringify(responseObject));
// }
