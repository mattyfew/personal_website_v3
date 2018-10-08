const express = require('express')
const router = express.Router()
const db = require('./db')

router.post('/admin-login', (req, res) => {
    res.cookie('authenticated', true)
    res.json({ success: true })
})

router.post('/admin-logout', (req, res) => {
    res.cookie('authenticated', false)
    res.json({ success: true })
})

router.post('/create-post', (req, res) => {
    db.createPost(req.body)
        .then(postId => {
            res.json({
                success: true,
                postId
            })
        })
        .catch(err => console.log('There was an error in POST /create-post', err))
})

router.get('/fetch-posts', (req, res) => {
    db.fetchPosts()
        .then(posts => res.json({ success: true, posts }))
        .catch(err => console.log('There was an error in GET /fetch-posts', err))
})

router.get('/fetch-post/:slug', (req, res) => {
    db.fetchPost(req.params.slug)
        .then(activePost => res.json({ success: true, activePost }))
        .catch(err => console.log('There was an error in GET /fetch-post', err))
})

router.post('/edit-post', (req, res) => {
    db.editPost(req.body)
        .then(() => res.json({ success: true }))
        .catch(err => console.log('There was an error in POST /edit-post', err))
})

router.delete('/delete-post', (req, res) => {
    db.deletePost(req.query.postId)
        .then(() => res.json({ success: true }))
        .catch(err => console.log('There was an error in DELETE /delete-post', err))
})

module.exports = router
