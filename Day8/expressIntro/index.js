// import packages 
const express = require('express');
const app = express();
const path = require('path');
const port = 8000;


// simple route
app.get('/', (req, res)=>{
    res.send("Hello express");
});

// users route
app.get('/users', (req,res)=>{
    res.send("hello users");
});

// send html file route
app.get("/html", (req,res)=>{
    res.sendFile(path.join(__dirname, "my_html.html"));
})


// listen
app.listen(port,()=>{
    console.log("express server is running on " + port);
});