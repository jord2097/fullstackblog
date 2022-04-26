const { User } = require('../models/users')

async function canEditPost(req, res, next){
    const currentUser = await User.findOne({token: req.headers.authorization})

    if (currentUser.role !== 'admin' && currentUser._id !== req.params.id){
        return res.send("You do not have permission to edit this post.")
    }
    next()
}

module.exports = {
    canEditPost
}