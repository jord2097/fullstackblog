module.exports = errorHandler;

function errorHandler(err,req,res,next){
    if (typeof err === 'string') {
        // external custom errors
        console.log(err)        
        return res.status(400).json({message: err})
    }

    if (err.name === "Unauthorized Error"){
        // auth error
        return res.status(401).json({message: 'Invalid token'})        
    }

    // generic error        
    return res.status(500).json({ message: err.message, headers: req.headers.authorization}) //headers: req.headers.authorization if need to test headers
}