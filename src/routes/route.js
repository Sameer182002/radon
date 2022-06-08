const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const Authorcontroller=require("../controllers/authorcontroller" )
 const AuthorbookController=require("../controllers/authorbookcontroller")
//  const AuthorsModel=require("../models/authorsModel")
 
 


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)

router.post("/createAuthors",Authorcontroller.createAuthors)
router.post("/createAuthorsBooks",AuthorbookController.createAuthorsBooks)
router.get("/booksbyChetan",AuthorbookController.booksbyChetan)
router.get("/authorOfTwoStates",AuthorbookController.authorOfTwoStates)

router.get("/getbooksbetwwen50-100",async function(req,res){
    let books =await Bookmodell.find({price : { $gte: 50, $lte: 100}}).select({author_id:1,_id:0})
    let arr=[]
    for(let i=0;i<books.length;i++){
        let b=await authorsModel.find(books[i]).select({author_name:1,_id:0})
        arr.push(b)
    }
    res.send({msg:arr})
    })
  
    router.get("/olderThan50",async function(req,res){
    let data= await authorsModel.find({age:{$gt:50}}).select({author_id:1,age:1,_id:0,author_name:1})
    let rating=await Bookmodell.find({author_id:data[0].author_id}).select({ratings:1})
    // let rating=await Bookmodell.findOne({author_id:data[0].author_id})
    // for(let i=0;i<data.length;i++){
    //     let index=
    // }
    res.send({rating})
    } )
    // let authors=await authorsModel.find({"books.author_id"}).select({author_name:1})


//MOMENT JS
const moment = require('moment');
const authorsModel = require('../models/authorsModel');
const Bookmodell = require('../models/Bookmodell');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;