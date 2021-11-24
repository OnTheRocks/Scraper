const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const port = 5400
const cors = require('cors')

const app = express()

app.use(cors())

const url = 'https://www.yahoo.com'

// app.METHOD(PATH, HANDLER)

app.get('/', function(req, res) {
  res.json('This is my SCRAPER!')
})

app.get('/news', (req, res) => {
  axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []

    $('.js-content-viewer', html).each(function() {
      const title = $(this).text()
      const atitle = $(this).attr('href')
      articles.push({
        title,
        atitle
      })
    })
    console.log(articles)
    res.json(articles)
    
  }).catch(err => console.log(err))
})



app.listen(port, () => console.log("Server is running on PORT", port))