const express = require('express');
const app = express()
const mysql= require("mysql");
const cors = require("cors");

app.use(cors())
app.use(express.json());

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root",
    database:"contactform"
});
app.post('/createform',(req,res) =>{
    const first_name=req.body.first_name;
    const last_name=req.body.last_name;
    const number=req.body.number;
    const email_id=req.body.email_id;
    const message=req.body.message;


    db.query('insert into contact(first_name,last_name,number,email_id,message) values(?,?,?,?,?)',
    [first_name,last_name,number,email_id,message], (err,result) =>{
        if(err)
        {
            console.log(err);
        }else
        {
            res.send("values inserted");
        }
    });

})
app.listen(3001,()=>
console.log("yaya your server is running in 3001"));