
// // import quotes from API 
// const endpoint = 'https://quote.api.fdnd.nl/v1/quote'
// export const list = document.querySelector('ul:first-of-type')

// import { showLoadingState, hideLoadingState, showErrorState } from './states.js';


// showLoadingState ()
// getData()


// function getData() {
//     fetch(endpoint).then(function(response) {
//         return response.json()
// })
//     .then (quotes => {
//         hideLoadingState ()
//         quotes.data = quotes.data.slice(0,-5)
//         renderData (quotes)
// })
//     .catch((error) => {  
//         console.log ("het gaat niet goed...")
//         hideLoadingState()
//         showErrorState(error)
// });

// }

// let id = 0;

// function renderData(quotes){
//     quotes.data.forEach(data => {
//     list.insertAdjacentHTML('beforeend', 
//     `<li id=${id = id + 1}>
//         <img src='${data.avatar}' alt='profielfoto' onerror="this.src='./img/vervanging.jpg'" >
//         <h2>${data.name}</h2>
//         <p>${data.text}</p>
//     </li>`)
//  })
// }
// ;

// // Als er meer komen, data lengte lezen (data.length)
// const quotes = [
//     '#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10', '#11',
// ]

// button.onclick = function() {
//     const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

//     var base_url = window.location.origin;

//     window.location.href = base_url + "/citas-para-ti/eindopdracht/" +  randomQuote
// }

// const quoterandom = document.querySelector("#quoterandom")
// function randomQuotes(quotes) {
//     quoterandom.insertAdjacentHTML('beforeend', 
//     `<li id=${id = 2}>
//         <img src='${quotes.avatar}' alt='profielfoto' onerror="this.style.display='none'" >
//         <h2>${quotes.name}</h2>
//         <p>${quotes.text}</p>
//     </li>`)
// }

