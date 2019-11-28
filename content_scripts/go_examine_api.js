//var browser = require("webextension-polyfill/dist/browser-polyfill.min");

const goExamineApiUrl =
  "https://us-central1-graphite-bliss-260202.cloudfunctions.net/AnalyseWebpage";

const currentUrl = window.location.href;

document.querySelectorAll("p")[0].style.border = "5px solid red";

console.log("Current Window: ", currentUrl);

fetch(goExamineApiUrl, {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: {
    url: currentUrl
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
