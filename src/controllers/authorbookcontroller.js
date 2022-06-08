const Bookmodell=require("../models/Bookmodell")
const authorsModel=require("../models/authorsModel")

let createAuthorsBooks=async function(req,res){
    let data=req.body
    let savedData=await Bookmodell.create(data)
    res.send({msg:savedData})
}

let booksbyChetan=async function(req,res){
    let data=await authorsModel.find({author_name:"Chetan Bhagat"}).select({author_id:1})
    let books=await Bookmodell.find({author_id:data[0].author_id})
    res.send(books)
}
let authorOfTwoStates=async function(req,res){
    let data =await Bookmodell.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let author=await authorsModel.find({author_id:data.author_id}).select({author_name:1,_id:0})
    let prices=data.price
    res.send({msg:author,prices})
}
module.exports.authorOfTwoStates=authorOfTwoStates
module.exports.booksbyChetan=booksbyChetan
module.exports.createAuthorsBooks=createAuthorsBooks