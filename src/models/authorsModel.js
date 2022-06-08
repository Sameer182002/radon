const mongoose=require("mongoose")

const authorschema=new mongoose.Schema({
    author_id:{
        type:Number,
        required:true
    },
    author_name:{
        type:String,
        unique:true
    },
    age:Number,
    address:String
})

module.exports=mongoose.model("Author",authorschema)