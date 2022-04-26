const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    displayName: String,
    username: String,
    password: String,      
    email: String,
    role: String,
    token: String
})

module.exports.User = mongoose.model('users', userSchema, 'users')