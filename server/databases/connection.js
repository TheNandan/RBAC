const URI = process.env.cloudURI || process.env.localURI
const DB = process.env.cloudDB || process.env.localDB

const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

const connectDB = async() => {

    try {
        
        mongoose.connect(URI,{
            dbName:DB
        })
        .then(
            console.log(` 💾 connected to ${DB} database ...`)
        )

    } catch (error) {
        
        console.log(error)

    }

}

module.exports = connectDB