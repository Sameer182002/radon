const authormodel=require("../models/authorsModel")

let createAuthors=async function(req,res){
    let data=req.body
    let authors=await authormodel.create(data)
    res.send({msg:authors})
    }



    module.exports.createAuthors=createAuthors