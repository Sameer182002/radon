const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required:true
    }, 
    authorName: {
        type:String,
        required:true
    }, 
    tags: [String],
    year:{
        type:Number,
        default:2021
    },
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages:{
        required:true,
        type:Number

    },
    // sales: {type: Number, default: 10}
    stockAvailable:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
