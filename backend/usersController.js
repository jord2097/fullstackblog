const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')
const { User } = require('./models/users.js')
const { v4: uuidv4 } = require('uuid') // tokens
const config = require('./config.json');


exports.index = async function (req,res){
    User.find()
    .then((users) => res.send(users))
}

exports.indexSecure = async function (req,res,next){ // not secured yet, userWithoutPassword operation not working
    const users = await User.find()
    users.map (users => {
        const { password, ...userWithoutPassword } = users
        return userWithoutPassword        
    })
    console.log(users)
    res.send(users)
    
}

exports.getByIDSecure = function (id){
    const user = User.find(u => u._id === ObjectId(id))
    if (!user) return
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword

}

exports.create = function (req,res,next){
    if(!req.body.username || !req.body.password){
        return (next(createError(400, "missing username/password")))
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        token: req.body.token,
        displayName: req.body.displayName,
        email: req.body.email
    })

    user.save()
        .then( () => res.send({result:true}))
}

exports.update = function (req,res,next){
    User.findOne({_id: ObjectId(req.params.id)})
    .then( (user) => {
        if(!user) {
            return (next(createError(400, "No user with that ID.")))
        }
        if(req.body.username) {user.username = req.body.username}
        if(req.body.password) {user.password = req.body.password}
        if(req.body.token) {user.token = req.body.token}
        if(req.body.displayName) {user.displayName = req.body.displayName}
        if(req.body.email) {user.email = req.body.email}
        if(req.body.role) {user.role = req.body.role}

        user.save()
            .then( () => res.send ({result: true}))
    })    
}

exports.delete = function (req,res,next){
    User.deleteOne({_id: ObjectId(req.params.id)})
    .then( (result) => {
        if (result.deletedCount){
            res.send({result: true})
        } else {
            return (next(createError(404, "no user with that id")))
        }
    })
}

exports.register = async function (req, res, next){
    const checkUser = await User.findOne({username: req.body.username})
    if(checkUser){
        res.sendStatus(409)
        return res.send("User Already Exists")
    }
    const newUserDetails = req.body
    const user = new User(newUserDetails)
    await user.save()
    res.send({message: "New account registered!"})
}

exports.login = async function (req,res,next){
    const user = await User.findOne({username: req.body.username})
    if (user) {
        const token = jwt.sign({ sub: user._id, role: user.role}, config.secret)
        user.token = token
        const {password, ...userWithoutPassword} = user
        await user.save()
        return {
            ...userWithoutPassword,
            token
        }
    }
    
}
