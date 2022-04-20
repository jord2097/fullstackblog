const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    token: String,
    displayName: String,
    email: String
})

module.exports.User = mongoose.model('users', userSchema, 'users')