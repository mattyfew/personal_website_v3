const express = require('express')
const app = express()
const compression = require('compression')
const cookieSession = require('cookie-session')

app.use(compression())

let secrets = process.env.NODE_ENV === 'production'
    ? process.env
    : require('./secrets')

app.use(cookieSession({
  secret: secrets.cookieSecret,
  maxAge: 24 * 60 * 60 * 1000 * 14
}))

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(3000, () => console.log("listening on port 3000"))
