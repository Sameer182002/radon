const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController=require("../controllers/memeController")
const weatherController= require("../controllers/weatherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/sessionByStates",CowinController.getDisandState)
//////////////////////////// Making an Api to crreate memes ////////////////////////////////////////////////
router.post("/makeNewMeme",memeController.makeNewMeme)
/////////////////////////////////  Find temp of cities in sorting order ///////////////////////////
router.get("/tempOfCities",weatherController.tempOfCities)

module.exports = router;