const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const App = express();
App.use(cors());

const db = mysql.createConnection(
    {
        host: "localhost",
        user:"root",
        password:"",
        database: "crud",
    }
)

App.get("/",(req,res)=>{
    res.json("Hello from backend");
})

App.get(
    "/",
    (req,res)=>
        {
            
            db.query("SELECT * FROM students",(err,data)=>{
                if(err){
                    return res.json("Error mah boii go check the code again");
                }
                return res.json(data);
            })

        }
    )





App.listen(8081,()=>{
    console.log("Listening on 8081 port");
    
});



