const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
module.exports = {
  //method to fetch all posts from the blog database.
  getAllInstructors: function (req, res) {
    connection.query("SELECT * from instructor;", (err, data) => {
      if (err) throw err;
      console.log(data);
      return res.status(200).send(data);
    });
  },
  getOneInstructor: function (req, res) {
    connection.query(
      "SELECT * from instructor where idinstructor=?;",
      req.params.instId,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(200).send(data);
      }
    );
  },
  modifyInstructor: function (req, res) {
    connection.query(
      `UPDATE instructor SET instructorFirstName=?,instructorLastName = ?,instructorAge = ?,cohortId = ? WHERE idinstructor = ?`,
      [
        [req.body.instructorFirstName],
        [req.body.instructorLastName],
        [req.body.instructorAge],
        [req.body.cohortId],
        [req.params.instId],
      ],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(201).send(data);
      }
    );
  },
  addInstructor: function (req, res) {
    connection.query(
      "insert into instructor (instructorFirstName,instructorLastName,instructorAge,cohortId) values(?,?,?,?)",
      [
        [req.body.instructorFirstName],
        [req.body.instructorLastName],
        [req.body.instructorAge],
        [req.body.cohortId],
      ],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(200).send(data);
      }
    );
  },
  deleteInstructor: function (req, res) {
    connection.query(
      "DELETE from instructor where idinstructor=?;",
      req.params.instId,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(200).send(data);
      }
    );
  },
};
