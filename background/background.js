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
    .then(res => res.json())
    .then(res => {
      console.log(typeof res)
      console.log(res)
      sendResponse(res);
    }
    )
    .catch(error => console.log('Error:', error));
  return true;
}

browser.runtime.onMessage.addListener(handleMessage);