const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model

const UserSchema = new Schema({
    username : {
        type : String,
        lowercase : true,
        required : true
    },
    email : {
        type : String,
        lowercase : true,
        required : true
    },
    role : {
        type : String,
        enum : ['user','admin'],
        default : 'user'
    },
    password : {
        type : String,
        required : true
    }
})

const user = Model('user',UserSchema)

module.exports = user