const adviceNumber = document.querySelector('.adviceNumber');
    if(adviceNumber == null){alert('A requested element does not exist in the page')};

const quote = document.querySelector('.quote');
    if(quote == null){alert('A requested element does not exist in the page')};

const generateQuoteButton = document.querySelector('.generateQuoteButton');
    if(generateQuoteButton == null){alert('A requsted element does not exist in the page')};

async function generateQuote() {
    try{
        const response = await fetch('https://api.adviceslip.com/advice');
        const quoteJson = await response.json();

        adviceNumber.textContent = `ADVICE # ${quoteJson.slip.id}` || 'UNABLE TO RETURN ID';
        quote.textContent = `"${quoteJson.slip.advice}"`;
        
    }catch(error){
        console.log(error);
        quote.textContent = "Error loading quote"
    }
}

generateQuoteButton.addEventListener("click", generateQuote);
generateQuote()