const express = require("express")
const cors = require("cors")
const path = require('path')
const app = express()

const { getHomePage, getCSS, getJS } = require('./controller/controller')

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

app.get('/', getHomePage)
app.get('/css', getCSS)
app.get('/js', getJS)

const port = process.env.PORT || 4000


app.listen(port, console.log(`Server running on ${port}`))