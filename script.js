const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let data = [];
let rnum;
// get quote from API
function singleQuote(qarray)
{
    rnum = Math.floor(Math.random() * qarray.length);
    return qarray[rnum];s
}

async function getQuote()
{
    const apiUrl =
    "https://type.fit/api/quotes/?method=getQuote&lang=en&format=json";

    try
    {
        const response = await fetch(apiUrl);
        data = await response.json();
        let newQuote = singleQuote(data);
        console.log(newQuote);
        if (newQuote.author === null)
        {
            authorText.textContent = "Unknown";
        }
        else
        {
            authorText.textContent = newQuote.author;
        }
        quoteText.textContent = newQuote.text
        
    }
    catch (error)
    {
        console.log(error);
    }
}
// On load
getQuote();