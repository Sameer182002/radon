const mongoose=require('mongoose');
const { required } = require('nodemon/lib/config');

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
        required:true,
        default:2021
    },
    price:{
        IndianRupee:String,
        European:String
    },
    TotalPages:{
        type:Number,
        required:true
    },
    StockAvailable:{
        type:Boolean,
        default:false
    },
    Tags:[String]

},{timestamps:true});
module.exports=mongoose.model('Book',bookSchema);  // It creates books named dir. in mongoCompass and it automatically converts into plural form and makes first letter in small alphabet 