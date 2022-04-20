const createError = require('http-errors')
const { ObjectId } = require('mongodb')
const { Post } = require('./models/posts.js')

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