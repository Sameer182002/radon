const mongoose=require('mongoose')

const  bookSchema =new mongoose.Schema({
    BookName: {
        type:String,
        required:true,
        unique:true
    },
    AuthorName: {
        type: String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Year:{
        type:Number,
        required:true
    }
},{timestamps:true});
module.exports=mongoose.model('Book',bookSchema);  // It creates books named dir. in mongoCompass and it automatically converts into plural form and makes first letter in small alphabet 