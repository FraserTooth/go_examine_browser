//var browser = require("webextension-polyfill/dist/browser-polyfill.min");

const goExamineApiUrl =
  "https://us-central1-graphite-bliss-260202.cloudfunctions.net/AnalyseWebpage";

const currentUrl = window.location.href;

//document.querySelectorAll("p")[0].style.border = "5px solid red";

console.log("Current Window: ", currentUrl);

const JSONdata = {
  url: currentUrl
}

// window.fetch(goExamineApiUrl, {
//   method: "POST",
//   mode: 'same-origin', // no-cors, *cors, same-origin,
//   headers: {
//     "content-type": "application/json"
//   },
//   body: {
//     url: currentUrl
//   }
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });


function handleResponse(message) {
  console.log({ message });
  //document.querySelectorAll("p")[0].innerText = JSON.stringify(message)
}

function handleError(error) {
  console.log(`Error: ${error}`);
}


const sending = browser.runtime.sendMessage(
  {
    data: JSON.stringify(JSONdata),
    url: goExamineApiUrl
  })

sending.then(handleResponse)





// function notifyBackgroundPage(e) {
//     var sending = browser.runtime.sendMessage({
//       greeting: "Greeting from the content script"
//     });
//     sending.then(handleResponse, handleError);
//   }

// window.addEventListener("click", notifyBackgroundPage);