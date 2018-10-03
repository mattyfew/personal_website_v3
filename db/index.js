const spicedPg = require('spiced-pg')
const secrets = require('../secrets')

// WILL NEED TO CHANGE URL WHEN HOSTING
const db = spicedPg(`postgres:${secrets.dbUser}:${secrets.dbPassword}@localhost:5432/personal_website`)

exports.createPost = function(info) {
    const q = `
        INSERT INTO posts
        (title, slug, content)
        VALUES ($1, $2, $3)
        RETURNING id
    `
    const params = [ info.title, info.slug, info.content ]

    return db.query(q, params)
        .then(results => results.rows[0].catch)
        .catch(err => console.log(err))
}
