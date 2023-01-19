const connection = require('./db');

const signUptoDB = (req,res)=>{
    // validate body exists
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    };

    // pull data from body to json

    const newCostomer = {
        "name": req.body.signUpName,
        "email": req.body.signUpEmail
    };

    // run query
    const Q1 = "INSERT INTO customers SET ?";
    connection.query(Q1, newCostomer, (err, mysqlres)=>{
        if (err) {
            console.log("error:", err);
            res.status(400).send({message: "error in SignUp " + err});
            return;
        }

        console.log("new customer created!");
        res.send("new customer created");
        return;
    });
};

const showAll = (req,res)=>{
    const Q2 = "SELECT * FROM customers";
    connection.query(Q2, (err, mysqlres)=>{
        if (err) {
            console.log("error:", err);
            res.status(400).send({message: "error in selecting all customers " + err});
            return;
        };
        console.log("success in selecting all customers");
        res.send(mysqlres);
        return;
    })


};

const createTable = (req,res)=>{

}


module.exports= {signUptoDB , showAll} ;