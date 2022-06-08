const mongoose = require('mongoose')

const bookSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    author_id:{
        type:Number,
        require:true
    },
    price:Number,
    ratings:Number

})
module.exports=mongoose.model("Books",bookSchema)
