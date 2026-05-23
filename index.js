const adviceNumber = document.querySelector('#adviceNumber');
const quote = document.querySelector('#quote');
const generateQuoteButton = document.querySelector('#generateQuoteButton');

async function generateQuote() {
    try{
        const response = await fetch('https://api.adviceslip.com/advice');
        const quoteJson = await response.json();
        console.log(quoteJson)

        adviceNumber.textContent = `ADVICE # ${quoteJson.slip.id}` || 'UNABLE TO RETURN ID'
        quote.textContent = `"${quoteJson.slip.advice}"`
        generateQuoteButton.addEventListener("click", generateQuote)
        
    }catch{

    }
}

generateQuote()