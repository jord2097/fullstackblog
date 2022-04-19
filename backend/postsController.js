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