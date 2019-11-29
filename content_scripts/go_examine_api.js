const goExamineApiUrl =
  "https://us-central1-graphite-bliss-260202.cloudfunctions.net/AnalyseWebpage";

const currentUrl = window.location.href;

//document.querySelectorAll("p")[0].style.border = "5px solid red";

console.log("Current Window: ", currentUrl);

const JSONdata = {
  url: currentUrl
}


function handleResponse(response) {
  console.log({ response });
  const pageParagraphs = document.querySelectorAll("p")
  //For Each Problem Word
  response.problemWords.forEach(problemWord => {

    //Set Up Regex
    const regex = new RegExp(problemWord.word, "ig")

    problemWord.locations.forEach(location => {
      //Copy Existing Text
      const existingText = pageParagraphs[location].innerText;

      //Find Locations
      let matches = [...existingText.matchAll(regex)];

      matches.forEach(match => {
        const updatedText = pageParagraphs[location].innerText;

        //Create Element
        const newMark =
          ` <div class="goExamineTip">${match}
            <span class="goExamineTipText">
              <h4>Go Examine</h4>
              ${problemWord.message}
             </span>
           </div>`

        //Create Replacement Text
        const newText = updatedText.replace(match, newMark);

        //Replace Text
        pageParagraphs[location].innerHTML = newText
      })
    })

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