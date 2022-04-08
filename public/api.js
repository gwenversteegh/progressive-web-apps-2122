const button = document.querySelector("#button")
const quoterandom = document.querySelector("#quoterandom")

const quotes = ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10']

function showRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    var base_url = 'http://localhost:8000/';
    
    window.location.href = base_url + randomQuote
}

button.addEventListener('click', showRandomQuote)