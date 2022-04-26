const { User } = require('./models/users.js')


async function authUser (req, res, next) {
    const token = req.headers.authorization
    console.log(token)
    if(!token || token == null){        
        return res.send("You need to login first.")
    }
    const checkToken = await User.findOne({token: token})
    if (!checkToken){        
        return res.send("You may need to login again due to session expiry.")
    }    
    next()
}


async function requiresAuthor (req, res, next) {
    const currentUser = await User.findOne({token: req.headers.authorization})
    if(currentUser.role === "author" || currentUser.role === "admin"){
        next()
    } else {
        return res.send("You do not have permission to perform this action.")
    }
}

async function requiresAdmin (req, res, next) {
    const currentUser = await User.findOne({token: req.headers.authorization})
    if(currentUser.role === "admin") {
        next()
    } else {
        return res.send("You do not have the requried permissions to perform this.")
    }
}


module.exports = {
    authUser,
    requiresAuthor,
    requiresAdmin
}