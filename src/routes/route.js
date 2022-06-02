const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash=require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   let arr=lodash.chunk(["January","February","March","April","May","June","July","August","September","October","November","December"],3)
   console.log(arr)
   let arr1=lodash.tail([1,3,5,7,9,11,13,15,17,19]);
   console.log(arr1)
   let ar1=[1,2,3]
   let ar2=[2,3,4]
   let ar3=[3,4,5]
   let ar4=[4,5,6]
   let ar5=[5,6,7]
   let arrayresult=lodash.union(ar1,ar2,ar3,ar4,ar5)
   console.log(arrayresult)
   let pair=[["horror","The Shining"],["drama", "Titanic"],["thriller" , "Shutter Island"] ,["fantasy","Pans Labyrinth"]]
   let pairresultt=lodash.fromPairs(pair)
   console.log(pairresultt)
    res.send("hello!")
});
router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason