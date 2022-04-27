const { User } = require('./models/users.js')
const { expressjwt: jwt } = require('express-jwt')
const { secret } = require('./config.json')

/* async function authenticate (req, res, next) { // authentication middleware
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
} */

function authorize(roles = []) { // authorization middleware
    if (typeof roles === 'string') {
        roles = [roles]
    }

    return [
        // authenticates JWT token and appends userdata to req.user
        jwt({ secret, algorithms: ['HS256'] }),
        

        // authorizes based on user roles
        (req,res,next) => {
            
            if (roles.length && !roles.includes(req.auth.role)) {
                // user doesn't have the required role
                return res.status(401).json({message: 'Unauthorized'})
            }
            // after successful authentication and authorization
            next()
        }      
        
    ]
}



/* async function requiresAuthor (req, res, next) {
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
} */


module.exports = {    
    authorize    
}