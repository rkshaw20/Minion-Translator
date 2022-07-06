var txtInput= document.querySelector("#txt-input");
var btnTrasnlate= document.querySelector("#btn-translate");
var outputDiv= document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTrasnlationURL(input){
    return serverURL+ "?" + "text=" +input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something is wrong with server! Please try again later")
}

function clickHandler(){
    var inputText= txtInput.value;

fetch(getTrasnlationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
    };
    btnTrasnlate.addEventListener("click",clickHandler)