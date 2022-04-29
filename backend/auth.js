const { User } = require('./models/users.js')
const { expressjwt: jwt } = require('express-jwt')
const { secret } = require('./config.json')


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

module.exports = {    
    authorize    
}