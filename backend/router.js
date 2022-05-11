const express = require('express')
const router = express.Router()
const posts = require('./postsController')
const users = require('./usersController')
const { authorize, verifyJwt } = require('./auth')
const { canEditPost } = require('./permissions/posts') // checks if user is admin or original post creator
const { ObjectId } = require('mongodb')
const Role = require('./models/roles')
const { token } = require('morgan')


router.get('/posts', verifyJwt, posts.index) // get all posts
router.get('/posts/:id', posts.indexOne) // get by ID
router.post('/posts/create',  authorize([Role.author, Role.admin]), posts.create) // create post
router.put('/posts/:id', authorize([Role.author, Role.admin]), posts.update) // update post
router.delete('/posts/:id',  authorize(Role.admin), posts.delete) // delete post
router.get('/search/category', posts.searchCategory) // search posts doesnt require authorisation
router.get('/search/tags', posts.searchTags)
router.get('/search', posts.search)
router.get('/posts/drafts',  authorize([Role.author, Role.admin]), posts.showDrafts) // show draft posts
router.get('posts/unpublished',  authorize([Role.author, Role.admin]), posts.showUnpublished) // show unpublished posts
router.delete('/posts/deleteall/:confirm',  authorize(Role.admin), posts.deleteAll) // delete all, not used in frontend

router.get('/admin/users', authorize(Role.admin), users.index) // insecure as provides passwords
router.get('/users', authorize([Role.user, Role.author, Role.admin]), users.indexSecure) // index with passwords removed
router.get('/users/:id', authorize([Role.user, Role.author, Role.admin]), users.getByIDSecure) // find user with password removed
router.post('/users/create',  authorize(Role.admin), users.create) // admin ability to create account
router.put('/users/:id',  authorize(Role.admin), users.update) // admin amend account details
router.delete('/users/:id', authorize(Role.admin), users.delete) // admin delete accounts
router.post('/register', users.register)
router.post('/login', authenticate)

function authenticate(req,res,next) {
    users.login(req, res, next)
        .then(user => user ? res.json(user)
            
         : res.status(400).json({message: 'Username or Password is Incorrect'}))
        .catch(err => next(err))
}






module.exports = router