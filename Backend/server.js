const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const instructorRoute = require('./routes/instructors.js');
const studentRoute = require('./routes/students.js');
const cohortRoute = require('./routes/cohorts.js');
const bodyparser =require ('body-parser')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyparser.urlencoded({extended:false}))

app.use("/api/students", studentRoute);
app.use("/api/instuctors", instructorRoute);
app.use("/api/cohorts", cohortRoute);
const port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
  });
  connection.connect(function (err) {
    if (err) throw err;
    else{
        console.log("Connected!",connection.database);
    }
  });
  module.exports = connection;
  