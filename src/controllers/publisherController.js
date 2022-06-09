const publisherModel=require("../models/publisherModel")

let createPublisher=async function(req,res){
    const data = req.body
    const publisher=await publisherModel.create(data)
    res.send({data:publisher})
}

module.exports.createPublisher=createPublisher