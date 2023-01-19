const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const sql = require('./db/db');
const CreateDB = require('./db/CreateDB')
const port = 1010;

app.use(express.static(path.join(__dirname,'static')));
app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes for app pages
app.get('/',function(req,res){
    res.redirect('/home');
});

app.get("/home", (req,res)=>{
    res.render('index', {
        v1: 'Hi Home Page'
    })
});

app.get("/page2", (req,res)=>{
    res.render('index', {
        v1: 'Hi Page 2'
    })
});

// routes for creating the DB
app.all('/CreateTables', CreateDB.createTables); 
app.all('/InsertDataToTables', CreateDB.InsertData2DB)

app.listen(port, ()=>{
    console.log('server is running on port ', port);
});