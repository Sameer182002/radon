const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    age: Number,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
   
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users

