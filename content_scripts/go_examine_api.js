const goExamineApiUrl =
  "https://us-central1-graphite-bliss-260202.cloudfunctions.net/AnalyseWebpage";

const currentUrl = window.location.href;

//document.querySelectorAll("p")[0].style.border = "5px solid red";

console.log("Current Window: ", currentUrl);

const JSONdata = {
  url: currentUrl
}


function handleResponse(message) {
  console.log({ message });
  const pageParagraphs = document.querySelectorAll("p")

  message.problemWords[0].locations.forEach(location => {

    //Create Highlight
    const newMark = `<mark>think</mark>`

    //Copy Existing Text
    const existingText = pageParagraphs[location].innerText;

    //Create Replacement Text
    const newText = existingText.replace(/think/ig, newMark);

    //Replace Text
    pageParagraphs[location].innerHTML = newText
  })
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