const express = require('express')
const app = express()
const compression = require('compression')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let secrets = process.env.NODE_ENV === 'production'
    ? process.env
    : require('./secrets')

app.use(cookieSession({
  secret: secrets.cookieSecret,
  maxAge: 24 * 60 * 60 * 1000 * 14
}))

app.use(express.static('public'))

app.post('/admin-login', (req, res) => {
    console.log("inside post /admin-login", req.body)
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(3000, () => console.log("listening on port 3000"))
