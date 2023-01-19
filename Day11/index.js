const express = require("express");
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const bodyParser = require("body-parser");
const connection = require('./db');
const CRUD = require('./CRUD');
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('static'));


// home page route
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "views/homePage.html"));
});

// signUp route
app.post('/signUp', CRUD.signUptoDB);

// show all customers
app.get('/showCustomers', CRUD.showAll);

// create tables
app.all('/createTables', CRUD.createTable)


// set app to listen
app.listen(port, ()=>{
    console.log("server is running on port " + port);
})


