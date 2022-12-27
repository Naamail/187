const mysql = require("mysql2");
const DBconfig = require("./db.config");

// create connection
const connection = mysql.createConnection({
    host: DBconfig.HOST,
    user: DBconfig.USER,
    password: DBconfig.PASSWORD,
    database: DBconfig.DB
});

// open mysql connection
connection.connect(error =>{
    if (error) throw error; 
    console.log("successfully connected to DB");
});

module.exports = connection;