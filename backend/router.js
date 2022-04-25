const express = require('express')
const router = express.Router()
const posts = require('./postsController')
const users = require('./usersController')
const { authUser, requiresAuthor, requiresAdmin } = require('./auth')


router.get('/posts', authUser, requiresAuthor, posts.index) // only using auth for quick testing purposes remove after
router.post('/posts/create', authUser, requiresAuthor, posts.create)
router.put('/posts/:id', authUser, requiresAuthor, posts.update)
router.delete('/posts/:id', authUser, requiresAdmin, posts.delete)
router.get('/search/category', posts.searchCategory) // searching is available for all users
router.get('/search/tags', posts.searchTags)
router.get('/posts/drafts', authUser, requiresAuthor, posts.showDrafts)
router.post('/register', users.register)
router.post('/login', users.login)


router.get('/users', authUser, users.index) // not sure of intended level required for viewing users
router.post('/users/create', authUser, requiresAdmin, users.create)
router.put('/users/:id', authUser, requiresAdmin, users.update)
router.delete('/users/:id', authUser, requiresAdmin, users.delete)

module.exports = router