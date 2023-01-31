// const connection = require("../server.js");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
module.exports = {
  //method to fetch all posts from the blog database.
  getAllStudent: function (req, res) {
    console.log(connection.query)
    connection.query("SELECT * from student;", (err, data) => {
      if (err) throw err;
      console.log(data);
      return res.status(200).send(data);
    });
      //  return res.status(200).send("sama7ni");

  },
  getOneStudent: function (req, res) {
    connection.query(
      `SELECT * from student where idstudent=?`,
      req.params.studId,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(200).send(data);
      }
    );
  },
  modifyStudent: function (req, res) {
    connection.query(
      `UPDATE student SET  studentFirstName=?,studentLastName = ?,studentAge = ? ,cohortID  = ? WHERE idstudent = ?`,
      [
        [req.body.studentFirstName],
        [req.body.studentLastName],
        [req.body.studentAge],
        [req.body.cohortID],
        [req.params.studId],
      ],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(201).send(data);
      }
    );  
  },
  addStudent: function (req, res) {
    connection.query(
      "insert into student (studentFirstName,studentLastName,studentAge,cohortID) values(?,?,?,?)",
      [
        [req.body.studentFirstName],
        [req.body.studentLastName],
        [req.body.studentAge],
        [req.body.cohortID],
      ],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(200).send(data);
      }
    );
  },
  deleteStudent: function (req, res) {
    connection.query(
      "DELETE from student where idstudent =?;",
      req.params.studId,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(200).send(data);
      }
    );
  },
};