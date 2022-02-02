const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')

function loading(){
    loader.hidden = false
    quoteContainer.hidden = true
}

function complete(){
    loader.hidden = true
    quoteContainer.hidden = false
}

// Get Quote From API
async function getQuote(){
    loading();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

    try{
        const response = await fetch(proxyUrl + apiURL);
      
        const data = await response.json();

        // If Author is blank, add 'Unkown'
        if (data.quoteAuthor === ''){
            authorText.innerText = 'unknown';
        }else{
            authorText.innerText = data.quoteAuthor;
        }

        // Reduce font size for long quotes
        if (data.quoteText.length > 50){
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }

        quoteText.innerText= data.quoteText;
        complete()

    } catch (error){
        console.log('whoops, no quote', error);
    }
    
}

// Tweet Quote
function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuote();
