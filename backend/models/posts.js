const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: String,
    mainText: String,
    img: String,
    category: String,    
    tags: String
})

module.exports.Post = mongoose.model('posts', postSchema, 'posts' )