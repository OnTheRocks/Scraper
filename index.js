const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const port = 5400

const app = express()

const url = 'https://www.theguardian.com/US'

axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []

    $('.fc-item__title', html).each(function() {
      const title = $(this).text()
      const atitle = $(this).find('a').attr('href')
      articles.push({
        title,
        atitle
      })
    })
    console.log(articles)
    .catch(err => console.log(err))
  })

app.listen(port, () => console.log("Server is running on PORT ${PORT}"))