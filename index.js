const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const port = 5400

const app = express()

const url = 'https://www.theguardian.com/US'

axios(url)

app.listen(port, () => console.log("Server is running on PORT ${PORT}"))