const spicedPg = require('spiced-pg')
const secrets = require('../secrets.json'

// WILL NEED TO CHANGE URL WHEN HOSTING
const db = spicedPg(`postgres:${secrets.dbUser}:${secrets.dbPassword}@localhost:5432/personal_website`)
