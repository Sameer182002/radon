const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/movies', function (req, res) {
   let movies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
});
router.get('/movies/:indexNumber', function (req, res) {
    let movies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let parm=req.params.indexNumber
    if (parm<=movies.length){
        let indexNumber=movies[parm]
        res.send(indexNumber)
    }
    else{
        res.send("Use Valid Index")
    }
 });
 router.get('/films' ,function(req,res){
     let aray=[ {
        "id": 1,
       "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       res.send(aray)
    });


router.get('/films/:filmId',function(req,res){
    let aray=[ {
        "id": 1,
       "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let ID=req.params.filmId
       let index=ID-1
       if (index<=aray.length){
           res.send(aray[index])
       }
       else{
           res.send("No movie exists with this id")
       }

       res.send(aray)
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