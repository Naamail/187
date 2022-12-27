const sql = require('./db');

const selectAll= (req,res)=>{
    sql.query("SELECT * FROM customers", (err, mysqlres)=>{
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting all customers " + err});
            return;
        }
        console.log("got all customers...");
        res.send(mysqlres);
        return;
    })
};

const CNC = (req,res)=>{
    // validate req is not empty
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    };
    // take input from req and insert into json
    const NewEntry = {
        "name": req.body.CustomerName,
        "email": req.body.CustomerEmail
    };
    // write sql syntax
    const Q2 = "INSERT INTO customers SET ?";
    // run query
    sql.query(Q2, NewEntry, (err, mysqlres)=>{
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in creating new customer " + err});
            return;
        };
        console.log("created new customer", {id:mysqlres.insertid, ...NewEntry});
        res.send("new customer created!");
        return;
    })
};



module.exports= {selectAll, CNC};

