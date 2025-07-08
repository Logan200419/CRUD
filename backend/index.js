const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})



app.get("/", (req, res) => {
    res.json("Hello! Mani from backend");
    db.query("SELECT * FROM students", (err, data) => {
        if (err) return res.json("ERROR Bruhhh: " + err);
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Listening on 8081");
});