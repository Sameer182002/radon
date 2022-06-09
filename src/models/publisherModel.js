const mongoose=require('mongoose')
// const ObjectId=mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    headQuarter:{
        type:String,
        required:true
    }
}, {timestamps:true});

module.exports=mongoose.model("sameerPublisher",publisherSchema)