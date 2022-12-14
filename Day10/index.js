// import 
const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static("static"));


//routing
//home page route
app.get('/', (req,res)=>{
    res.redirect("/index");
    });

//home page route
app.get('/index', (req,res)=>{
    //res.send("hi Yuval and Ran!");
    res.sendFile(path.join(__dirname, "views/index.html"));
    });



//page2 route
app.get('/page2',(req,res)=>{
    //res.send("Hi Guy!");
    res.sendFile(path.join(__dirname, "views/page2.html"));
});

//page3 route
app.get('/page3', (req,res)=>{
    res.send("Hi Yahel :)");
});

//page 4 route
app.get('/page4', (req,res)=>{
    res.send("Hi Idan");
});



//listen
app.listen(port,()=>{
    console.log("server is running at port " + port);
});