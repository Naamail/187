const connection = require('./db');
const csv  = require('csvtojson');
const path = require('path');

const createTables = (req,res)=>{
    const Q1 = "CREATE TABLE Table187 (UserName VARCHAR(255), UserPassword VARCHAR(255), TimeStamp TIMESTAMP)";
    connection.query(Q1, (err, mysqlres)=>{
        if (err) {
            res.status(400).send({message: 'table not created'});
            return;
        }
        res.send({message: "table created"})
    })
};

const InsertData2DB = (req,res)=>{
    var Q2 = "INSERT INTO Table187 SET ?";
    const csvFilePath= path.join(__dirname, "Data.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj); // for learning perpose
    jsonObj.forEach(element => {
        var NewEntry = {
            "UserName": element.UserName,
            "UserPassword": element.UserPassword,
            'TimeStamp': element.TimeStamp
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting data", err);
            }
            console.log("created row sucssefuly ");
        });
    });
    });
    
    res.send("data inserted");

};

module.exports={createTables, InsertData2DB}