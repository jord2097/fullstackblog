const express = require('express')
const router = express.Router()
const posts = require('./postsController')
const users = require('./usersController')
const { authUser, requiresAuthor, requiresAdmin } = require('./auth')
const { canEditPost } = require('./permissions/posts') // checks if user is admin or original post creator


router.get('/posts', posts.index) // only using auth for quick testing purposes remove after
router.post('/posts/create', authUser, requiresAuthor, posts.create)
router.put('/posts/:id',  posts.update) // authUser, requiresAuthor, canEditPost,
router.delete('/posts/:id', authUser, requiresAdmin, posts.delete)
router.get('/search/category', posts.searchCategory) // searching is available for all users
router.get('/search/tags', posts.searchTags)
router.get('/posts/drafts', authUser, requiresAuthor, posts.showDrafts)
router.get('posts/unpublished', authUser, requiresAuthor, posts.showUnpublished)
router.post('/register', users.register)
router.post('/login', users.login)
router.delete('/posts/deleteall/:confirm', authUser, requiresAdmin, posts.deleteAll)

router.get('/users', authUser, users.index) // not sure of intended level required for viewing users
router.post('/users/create', authUser, requiresAdmin, users.create)
router.put('/users/:id', authUser, requiresAdmin, users.update)
router.delete('/users/:id', authUser, requiresAdmin, users.delete)






module.exports = router