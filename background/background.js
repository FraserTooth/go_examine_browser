function handleMessage(request, sender, sendResponse) {
  console.log({ request })
  fetch(request.url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'mode': 'cors',
    },
    body: request.data
  })
    .then(response => response.json())
    .then(response => sendResponse(response))
    .catch(error => console.log('Error:', error));
}

// background-script.js

// function handleMessage(request, sender, sendResponse) {
//   console.log("Message from the content script: " +
//     request.greeting);
//   sendResponse({ response: "Response from background script" });
// }

browser.runtime.onMessage.addListener(handleMessage);