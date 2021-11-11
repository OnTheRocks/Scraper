const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const port = 5400

const app = express()

const url = 'https://www.yahoo.com'

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
    
  }).catch(err => console.log(err))

app.listen(port, () => console.log("Server is running on PORT ${PORT}"))