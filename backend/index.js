const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const App = express();
App.use(cors());
// App.use(express.json());

const db = {
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
};

let connection;

async function initDB() {
  connection = await mysql.createConnection(db);
  console.log("Connected to DB");
}
initDB().catch(console.error);

App.post("/apilogin", async (req, res) => {
  const { Username } = req.body;
  try {
    const [rows] = await connection.execute(
      "SELECT Password FROM auth WHERE Username = ?",
      [Username]
    );

    if (rows.length > 0) {
      return res.json({ password: rows[0].Password });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

App.get("/", async (req, res) => {
  try {
    const [rows] = await connection.execute("SELECT * FROM auth");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

App.listen(8081, () => {
  console.log("Listening on 8081 port");
});
