const spicedPg = require('spiced-pg')
const secrets = require('../secrets')

// WILL NEED TO CHANGE URL WHEN HOSTING
const db = spicedPg(`postgres:${secrets.dbUser}:${secrets.dbPassword}@localhost:5432/personal_website`)

exports.fetchPosts = function() {
    const q = `
        SELECT * FROM posts
    `

    return db.query(q)
        .then(results => results.rows)
        .catch(err => console.log(err))
}

exports.fetchPost = function(slug) {
    const q = `
        SELECT * FROM posts WHERE slug = $1
    `
    const params = [ slug ]

    return db.query(q, params)
        .then(results => results.rows[0])
        .catch(err => console.log(err))
}

exports.createPost = function(info) {
    const q = `
        INSERT INTO posts
        (title, slug, content)
        VALUES ($1, $2, $3)
        RETURNING id
    `
    const params = [ info.title, info.slug, info.content ]

    return db.query(q, params)
        .then(results => results.rows[0].id)
        .catch(err => console.log(err))
}

exports.editPost = function({ title, slug, content, id }) {
    const q = `
        UPDATE posts
        SET title = $1, slug = $2, content = $3
        WHERE id = $4
    `
    const params = [ title, slug, content, id ]

    return db.query(q, params)
}
