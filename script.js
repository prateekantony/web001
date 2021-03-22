// get quote from API
async function getQuote()
{
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    try
    {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await rsponse.json();
    }
    catch (error)
    {
        console.log('Error')
    }
}
// On load
getQuote();