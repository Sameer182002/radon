const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");

const mid1= async function(req,res,next){
    try{
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        
        //If no token is present in the request header return error
        if (!token) return res.status(401).send({ status: false, msg: "token must be present" }); 
        console.log(token);
        let decodedToken = jwt.verify(token, "functionup-radon");
        console.log(decodedToken)
        if (!decodedToken)  return res.status(404).send({ status: false, msg: "token is invalid" });
        next()
    }
  catch(err){
    // console.log({msg:err.message})
    res.status(500).send({msg:err.message})
  }
}


const mid2= async function (req,res,next){

   try {
        let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    // if (!token) return res.send({ status: false, msg: "token must be present" }); 
    let decodedToken = jwt.verify(token, "functionup-radon");
    let userid = req.params.userId
    let findDecodedUserId= decodedToken.userId
    if(userid!=findDecodedUserId) return res.status(403).send({msg:"Not Logged In User"})
    next()
}
catch(err){
    res.status(500).send({msg:err.message})
}
}


// If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself


module.exports.mid1= mid1
module.exports.mid2=mid2