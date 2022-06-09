const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name:{
        type:String,
        unique:true,
        required:true
    }, 
    author_id: {
        type: ObjectId,
        ref: "SameerAuthor"
    },
    price: Number,
    ratings: Number,
    publisher_id:{
        type:ObjectId,
        ref:"sameerPublisher"
    },
    isHardCover :{
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('SameerBook', bookSchema)
