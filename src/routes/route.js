const express = require('express');
const externalModule = require('../logger/logger')
const externalModule1=require('../util/helper')
const externalModule2=require('../validator/formatter')
const lodash=require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
    externalModule.welcome()
    externalModule1.printdate()
    externalModule1.printmonth()
    externalModule1.getbatchinfo()
    externalModule2.trim()
    externalModule2.toLowerCase()
    externalModule2.toUpperCase()

});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
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
module.exports = router;
// adding this comment for no reason