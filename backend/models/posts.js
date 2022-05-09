const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: String,
    mainText: String,
    img: String,
    category: String,    
    tags: String,
    creatorID: String,
    draft: {type: Boolean, default: false},
    published: {type: Boolean, default: true},
    creationTime: { type: Date, default: () => new Date() }
    
})

module.exports.Post = mongoose.model('posts', postSchema, 'posts' )