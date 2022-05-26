const quoteId = document.getElementById('quote-id');
const quote = document.getElementById('quote');
const button = document.getElementById("get-random-quote")

fetch("https://api.adviceslip.com/advice")
    .then(res => {
        return res.json()})
    .then(data => {
        quote.innerText = data.slip.advice;
        quoteId.innerText = data.slip.id;
    })
    .catch(error => res.status(400).json({ error }))


button.addEventListener("click", ()=>{
    fetch("https://api.adviceslip.com/advice")
    .then(res => {
        return res.json()})
    .then(data => {
        quote.innerText = data.slip.advice;
        quoteId.innerText = data.slip.id;
    })
    .catch(error => res.status(400).json({ error }));
})
