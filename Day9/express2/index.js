// import modoules
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 8080;

app.use(express.static('static'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// routes
// route "home page"
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"))
    //res.send("hi express");
});


// route "page 2"
app.post('/page2', (req,res)=>{
    var body = req.body;
    var UserLocation = {
        "UserLong" : req.body.long ,
        "UserLat" : req.body.lat
    };    
    console.log(body);
    console.log(UserLocation);
    res.sendFile(path.join(__dirname,'views/page2.html'));
    //res.send("hi express 2")
});


// listen
app.listen(port, ()=>{
    console.log("express server is running on port " + port);
});
