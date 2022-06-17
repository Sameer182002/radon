const axios=require("axios")

// Assignment: Create a Post request API (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below OR incase you find error in using this username password due to too many people trying to access it, then create your own account and plz do share username password on your group so that others can use it too- be kind and helpful):

let makeNewMeme=async function(req,res){
 try{   
    let id=req.query.username
    let pw=req.query.password
    let iD=req.query.template_id
    let t0=req.query.text0
    let t1=req.query.text1

    let options={
        method:"post",
        url:`https://api.imgflip.com/caption_image?username=${id}&password=${pw}&template_id=${iD}&text0=${t0}&text1=${t1}`
    }
    let result=await axios(options)
    res.status(201).send({msg:result.data})
}
catch(err){
    res.status(500).send({msg:err.message})
}
}

module.exports.makeNewMeme=makeNewMeme