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
    console.log('inside POST /create-post', req.body)

    db.createPost(req.body)
        .then(postId => {
            res.json({
                success: true,
                postId
            })
        })
        .catch(err => console.log('There was an error in POST /create-post', err))
})

module.exports = router
