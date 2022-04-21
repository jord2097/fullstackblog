const express = require('express')
const router = express.Router()
const posts = require('./postsController')
const users = require('./usersController')

router.get('/posts', posts.index)
router.post('/posts/create', posts.create)
router.put('/posts/:id', posts.update)
router.delete('/posts/:id', posts.delete)
router.get('/search/category', posts.searchCategory)
router.get('/search/tags', posts.searchTags)
router.get('/posts/drafts', posts.showDrafts)

router.get('/users', users.index)
router.post('/users/create', users.create)
router.put('/users/:id', users.update)
router.delete('/users/:id', users.delete)


module.exports = router