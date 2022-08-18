const path = require('path')
require('dotenv').config()

// include and initialize the rollbar library with your access token
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello World!')

module.exports = {
    getHomePage: (req, res) => {
        rollbar.log('They hit our website')
        res.sendFile(path.join(__dirname, '../../client/index.html'))
    },

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/styles.css'))
    },

    getJS: (req, res) => {
        rollbar.log('got the JS')
        res.sendFile(path.join(__dirname, '../../client/main.js'))
    }
}
