const jwt = require("jsonwebtoken");
// const { findOneAndUpdate } = require("../models/userModel");
const userModel = require("../models/userModel");

//You can name the req, res objects anything.
//but the first parameter is always the request 
//the second parameter is always the response
//////////////////////////////////////////////////////    1st Problem      ////////////////////////////////////////////////////////////////////
const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length == 0) {
      res.status(400).send({ msg: "Pls Follow All Required Conditions And Data Should Not Be Empty" })
    }
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  }
  catch (err) {
    res.status(500).send({ msg: err.message })
  }
};
///////////////////////////////////////////////////////        Login         ///////////////////////////////////////////////////////////////
const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(401).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Radon",
        organisation: "Function Up"
      },
      "functionup-radon"
    );
    console.log(token)
    res.status(201).send({ status: true, token: token });
  }
  catch(err){
    res.status(500).send({msg:err.message})
  }
};
//////////////////////////////////////////////  Get Details Of User ////////////////////////////////////////////////////////////////////////
const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}
catch(err){
  res.status(500).send({error:err.message})
}
};
//////////////////////////////////////////////////// Update User  /////////////////////////////////////////////////////////////////
const updateUser = async function (req, res) {
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true })
  res.status(200).send({ status: "done", data: updatedUser });
  }
  catch(err){
    res.status(500).send({msg:err.message})
  }
};

////////////////////////////////////////////////// Delete User ///////////////////////////////////////////////////////////////////////////////
let deleteuser = async function (req, res) {
try{
  let userid = req.params.userId
  let idfounded = await userModel.findOneAndUpdate({ id: userid }, { $set: { isDeleted: true } }, { new: true })
  res.status(201).send({ msg: "Deleted", data: idfounded })
}
catch(err){
  res.status(500).send({msg:err.message})
}
}
///////////////////////////////////////////////// Update Posts ////////////////////////////////////////////////////////////////////////////////
let updatePosts = async function (req, res) {
  try{
  let id = req.params.userId
  let user = await userModel.findById(id)
  if (!user) return res.send({ msg: "Id Is Invalid" })
  let updateposts = user.posts
  let data = req.body.message
  updateposts.push(data)
  let postUpdate = await userModel.findOneAndUpdate({ _id: id }, { $set: { posts: updateposts } })
  res.status(201).send({ msg: "Posts Updated Done", postUpdate })
}
catch(err){
  res.status(500).send({msg:err.message})
}
  // let updatedata= findOneAndUpdate({_id:id},{$set:{posts:data}})
}
module.exports.deleteuser = deleteuser
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.updatePosts = updatePosts