const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")



const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController");
const authorModel = require('../models/authorModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPublisher",publisherController.createPublisher)
router.post("/createBook", bookController.createBook  )
router.get("/getAllBooksWithAuthorAndPublisher",bookController.getAllBooksWithAuthorAndPublisher)

router.get("/byPenguin",async function(req,res){
    let data =await publisherModel.find({$or:[{name:"Penguin"},{name:"HarperCollins"}]}).select({_id:1})
    let updatebooks=await bookModel.updateMany({publisher_id:data},{$set:{"isHardCover": true}},{new:true})
    console.log(data)
    console.log(updatebooks)
    res.send({msg:updatebooks})
})

router.get("/ratinggreater",async function(req,res){
    let data = await authorModel.find({rating:{$gt:3.5}})
    console.log(data)
    let updatedprice= await bookModel.updateMany({author_id:data},{$inc:{price:10}},{new:true})
    console.log(updatedprice)
    res.send({msg:"hii"})
})



// router.get("/getAuthorsData", authorController.getAuthorsData)


// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;