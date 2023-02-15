require('dotenv').config()
const PORT = process.env.PORT || 8080

const express = require('express')
const path = require('path')
const connectDB = require('./server/databases/connection')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()

app.set('view engine','ejs')

app.use(morgan('tiny'))
app.use(express.static('assets'))
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(session({
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : false,
    cookie:{
        httpOnly:true,
        maxAge:12*60*60*1000
    }
}))
app.use('/',require('./server/routers/router'))

connectDB().then(
    app.listen(PORT,async() => {
        console.log(` Application @ http://127.0.0.1:${PORT}`)
    })
)