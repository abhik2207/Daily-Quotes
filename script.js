const apiURL = "https://type.fit/api/quotes";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

getQuote(apiURL);

let number = 0;

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data[number].text;
    authorText = data[number].author;
    authorText = authorText.slice(0, -10);
    author.innerHTML = authorText;
    if(number==15){
        number = 0;
    }
    else{
        number++;
    }
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - by, " + author.innerHTML, "Tweet a quote!", "width=1000, height=600");
}