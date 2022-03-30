
const http = require('http');
const express = require('express')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views');
app.set('port', process.env.PORT || 8000)

// Stel een static map in
app.use(express.static('public'))

// Maak een route voor de index
app.get("/", renderPagina)
app.get("/offline", renderOffline)



// Maak een route voor quotes
function renderPagina (req, res){
  fetch(`https://quote.api.fdnd.nl/v1/quote/`)
  .then(function(response){
    return response.json()
  })
  
  .then((jsonData) =>{
    jsonData.data = jsonData.data.slice(0,-5)
    res.render('index', {
      data: jsonData.data,
      data2: jsonData.data,
      pageTitle: "Quotes"
    })
  })
}


const server = app.listen(app.get('port'), function () {
  console.log(`Application started on port: ${app.get('port')}`)
})


function renderOffline (req, res){
res.render('offline', {
pageTitle: "Offline"
  })
}
/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
 async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .then((body) => body.data)
    .catch((error) => error)
}