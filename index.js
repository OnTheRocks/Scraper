const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const port = 5400

const app = express()

app.listen(port, () => console.log("Server is running on PORT ${PORT}"))