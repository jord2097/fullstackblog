const createError = require('http-errors')
const { ObjectId } = require('mongodb')
const { Post } = require('./models/posts')
const { User } = require('./models/users')

// CRUD operations

exports.index = async function (req,res){
    Post.find()
    .then((posts) => res.send(posts))
}

exports.create = async function (req,res,next){
    if(!req.body.title || !req.body.mainText){
        return (next(createError(400, "missing title and/or main text")))
    }
    const postCreator = await User.findOne({_id: req.auth.sub})
    const creatorID = postCreator.displayName
    

    const post = new Post({
        title: req.body.title,
        mainText: req.body.mainText,
        img: req.body.img,
        category: req.body.category,
        tags: req.body.tags,
        creatorID: creatorID       
    })

    post.save()
        .then( () => res.send({message: "Post Created Successfully!"}))
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
        if (req.body.draft === "true") {
            post.draft = true
        } else if (req.body.draft === "false") {
            post.draft = false
        }
        if (req.body.published === "true") {
            post.published = true
        } else if (req.body.published === "false") {
            post.published = false
        }
        if (req.body.creatorID) {post.creatorID = req.body.creatorID}   

        post.save()
            .then( () => res.send ({message: "Post Updated Successfully!"}))
    })    
}

exports.delete = function (req,res,next){
    Post.deleteOne({_id: ObjectId(req.params.id)})
    .then( (result) => {
        if (result.deletedCount){
            res.send({message: "Post Deleted Successfully"})
        } else {
            return (next(createError(404, "no post with that id")))
        }
    })    
}

exports.deleteAll =  async function (req,res,next){
    if (req.params.confirm !== "yes") {
        return res.send({message: `Are you sure you want to delete? Replace ${req.params.confirm} with yes`})
    }
    await Post.deleteMany()
    res.send({message: 'All Events Deleted.'})
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

exports.search = async function (req, res, next){
    let data = await Post.find(
        {
            "$or":[
                {title:{"$regex": req.query.q, "$options": "gi"}},
                {mainText:{"$regex": req.query.q, "$options": "gi"}},
                {category:{"$regex": req.query.q, "$options": "gi"}},
                {tags:{"$regex": req.query.q, "$options": "gi"}}
            ], // looks within the specified fields for all valid posts for the query (case-insensitive)
            "$and":[
                {draft: false},
                {published: true}
            ] // ensures only public posts are included in the search
        }
    )    
    res.send(data)
}

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