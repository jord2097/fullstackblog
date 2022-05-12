const { User } = require('./models/users.js')
const { expressjwt: jwt } = require('express-jwt')
const { secret } = require('./config.json')
const jwtoken = require('jsonwebtoken')


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

/* function parseJwt (token) {
    if (token) {
        token.replace(/^Bearer\s+/, "")
        var base64Url = token.split('.')[1]
        var base64 = base64Url.replace('-', '+').replace('_','/')
        return JSON.parse(Buffer.from(base64, 'base64').toString('utf8'))
    }
} */ // doesnt verify before decode

function authorizeElevated(roles = []) {
    if (typeof roles === 'string'){
        roles = [roles]
    }

    return [
        jwt({ secret, algorithms: ['HS256'], credentialsRequired: false}),

        (req,res,next) => {
            next()
        }

    ]
}

module.exports = {    
    authorize, 
    authorizeElevated
}