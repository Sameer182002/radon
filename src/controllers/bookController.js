const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body

    if (!req.body.author_id && !req.body.publisher_id){
        return res.send("Author Id And PublisherId Is Required")
    }

    let id=req.body.author_id
    let id2=req.body.publisher_id

    let authorID=await authorModel.findById({_id:id})
    let publisherID=await publisherModel.findById(id2).select({_id:1})

    if (!authorID)  res.send({msg:"Author ID IS NOT MATCHED"})
    if(!publisherID)  res.send({msg:"publisher id is not matched"})

    let bookCreated = await bookModel.create(book)
        res.send({data :bookCreated})
}

const getAllBooksWithAuthorAndPublisher=async function(req,res){
    let data=await bookModel.find().populate(['author_id','publisher_id'])
    res.send({msg:data})
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}
module.exports.getAllBooksWithAuthorAndPublisher=getAllBooksWithAuthorAndPublisher
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
