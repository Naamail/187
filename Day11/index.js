const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const sql = require('./db');
const CRUD = require('./CRUD');
const port = 9090;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));


//home page route
app.get("/",(req,res)=>{
    res.send("hi again");
});

// get all customers route
app.get('/customers', CRUD.selectAll);

// cretae new customer form
app.get("/CNCform", (req,res)=>{
    res.sendFile(path.join(__dirname, "CNCustomer.html"));
});

// insert new customer to DB
app.post("/CNCfunction", CRUD.CNC);

app.listen(port, ()=>{
    console.log("server is running on port " + port);
})