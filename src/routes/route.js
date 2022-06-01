const express = require('express');
const logger=require('./logger')
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/test-me1', function (req, res) {
    console.log("The constant in logger point has a value " + logger.url)
    console.log("The current batch is  " + logger.batch)
    console.log("The current function is  " + logger.log)
    res.send('My second ever api!')
});
router.get('/test-me2', function (req, res) {
    res.send('My three ever api!')
});
router.get('/test-me3', function (req, res) {
    res.send('My last ever api!')
});
module.exports = router;
// adding this comment for no reason