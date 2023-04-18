const quoteArray = ['Success is never final; failure is never fatal.- Conrad Hilton', 
'One of the most difficult things is not to change society - but to change yourself.- Nelson Mandela', 
'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.- Samuel Beckett', 'hello', 'bye', 'velin', 'mussie', 'elena']


let quoteContainer = document.getElementById('quote-container');

async function load(){
    const rndInt = Math.floor(Math.random() * 3) + 1 
    console.log(rndInt)
    quoteContainer.textContent = quoteArray[rndInt];
}

setInterval(load, 2000);