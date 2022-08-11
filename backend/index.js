const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.PORT || 3000
const mongoose = require('mongoose') 
const { v4: uuidv4 } = require('uuid') // tokens
const uri = "" // MongoDB uri
const { User } = require('./models/users.js')
const errorHandler = require('./errorHandler')

mongoose.connect(uri)

const app = express()
app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))
// app.use(setUser)
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Blog API listening on http://localhost:${port}`)
})

var db = mongoose.connection
db.on('error', console.error.bind(console, "Connection error"))
db.once('open', function callback() {
    console.log("Database connected")
})

