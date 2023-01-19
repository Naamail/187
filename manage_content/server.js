const express = require('express');
const app = express();
const path = require('path');
const csv=require('csvtojson');
const port = 7070;

// app.use(express.static(__dirname));
app.use(express.static(`static`));

// load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// home page route
app.get('/', (req, res) =>{
    res.redirect('/home');
    //res.render('home', {name:'/'});
});

app.get('/home', (req, res) =>{
    res.render('home', {name:'home'})
});

// Research page route 
app.get('/research', (req,res)=>{
    res.render('research')
    });    
;

// Research2 page route 
app.get('/research2', (req,res)=>{
    const csvFilePath= path.join(__dirname, "./content/research.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
        res.render('research2', {name:'research2', var1:jsonObj})
    
    })
    });    
;

app.listen(port, ()=>{
    console.log("example app listening at localhost:" + port)
});

/* 
res.render('research2', {name:'research2', var1:jsonObj})
const csvFilePath= path.join(__dirname, "./content/research.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
*/