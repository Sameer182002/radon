const bookModel=require("../models/BookModel")

let createBook=async function (req,res) {
    let data=req.body
    let savedData=await bookModel.create(data)
    
   res.send({msg:savedData})
}
let getBooksList=async function(req,res){
    let allBooks=await bookModel.find()
    res.send({msg:allBooks})
}
module.exports.createBook=createBook
module.exports.getBooksList=getBooksList