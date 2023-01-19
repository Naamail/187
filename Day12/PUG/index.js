const express = require("express");
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const sql = require('./db');
const CRUD = require('./CRUD');
const port = 1010;


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'static')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home page route 
app.get('/', function(req,res){
    //res.send("hello PUG");
    res.render('index', {
        v1:"hello PUG",
        v2:"this is an intro to PUG"
    });
});

app.get('/page2', function(req,res){
    //res.send("hello PUG");
    res.render('index', {
        v1:"hello again PUG",
        v2:"this is another intro to PUG"
    });
});

app.get('/page3', function(req,res){
    //res.send("hello PUG");
    res.render('search', {
        v1:"Page 3",
        v2:"click to select all users from DB"
    });
});

app.get('/selectAll', CRUD.showAll);

// set listen
app.listen(port, ()=>{
    console.log("server is runnig on port ", port);
})