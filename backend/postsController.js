const createError = require('http-errors')
const { ObjectId } = require('mongodb')
const { Post } = require('./models/posts.js')

// CRUD operations

exports.index = async function (req,res){
    Post.find()
    .then((posts) => res.send(posts))
}

exports.create = function (req,res,next){
    if(!req.body.title || !req.body.mainText){
        return (next(createError(400, "missing title and/or main text")))
    }

    const post = new Post({
        title: req.body.title,
        mainText: req.body.mainText,
        img: req.body.img,
        category: req.body.category,
        tags: req.body.tags
    })

    post.save()
        .then( () => res.send({result:true}))
}

exports.update = function (req,res,next){
    Post.findOne({_id: ObjectId(req.params.id)})
    .then( (post) => {
        if(!post) {
            return (next(createError(400, "No post with that ID.")))
        }
        if(req.body.title) {post.title = req.body.title}
        if(req.body.mainText) {post.mainText = req.body.mainText}
        if(req.body.img) {post.img = req.body.img}
        if(req.body.category) {post.category = req.body.category}
        if(req.body.tags) {post.tags = req.body.tags}        
        (req.body.draft) ? post.draft = true : post.draft = false
        if (req.body.draft) {
            post.draft = true
        } else {
            post.draft = false
        }
        if (req.body.published) {
            post.published = true
        } else {
            post.published = false
        }   

        post.save()
            .then( () => res.send ({result: true}))
    })    
}

exports.delete = function (req,res,next){
    Post.deleteOne({_id: ObjectId(req.params.id)})
    .then( (result) => {
        if (result.deletedCount){
            res.send({result: true})
        } else {
            return (next(createError(404, "no post with that id")))
        }
    })
}

// extra operations

exports.searchCategory = async function (req, res, next){
    const categoryMatches = await Post.find({category: req.body.category})
    if (categoryMatches.length === 0){
        return next(createError(404, "no posts with that category were found"))
    }
    res.send(categoryMatches)
} // searches exact category match

exports.searchTags = async function (req, res, next){
    const tagMatches = await Post.find({tags: {$regex: req.body.tags, $options: "i"}})
    if (tagMatches.length === 0){
        return next(createError(404, "no match found"))
    }
    res.send(tagMatches)
} // searches for tag within string using regex

exports.showDrafts = async function (req, res, next){
    const currentDrafts = await Post.find({draft: true})
    if (currentDrafts.length === 0){
        return next(createError(404, "no drafts found"))
    }
    res.send(currentDrafts)
}

exports.showUnpublished = async function (req, res, next){
    const currentUnpublished = await Post.find({published: false})
    if (currentUnpublished.length === 0){
        return next(createError(404, "no posts are unpublished"))
    }
    res.send(currentUnpublished)
}