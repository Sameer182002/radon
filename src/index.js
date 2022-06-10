const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment =require("moment")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function(req,res,next){
        console.log("Hi I AM INSIDE MIDDLEWARE")
        let date=moment().format('YYYY-DD-MM h:mm:ss a')
        console.log(date,req.socket.remoteAddress,req.path)
        console.log(date,req.ip,req.path)
        next()
    
    }      
  );

app.use('/',route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
