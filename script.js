const apiURL = 'https://api.quotable.io/quotes/random';
const quote = document.getElementById("quote");
const author = document.getElementById("author");

getQuote(apiURL);

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - by, " + author.innerHTML, "Tweet a quote!", "width=1000, height=600");
}

async function copy(){
    await navigator.clipboard.writeText(quote.innerHTML);
    window.alert("Text copied to clipboard!")
}

function speak(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = quote.innerHTML
    window.speechSynthesis.speak(speech);
}
