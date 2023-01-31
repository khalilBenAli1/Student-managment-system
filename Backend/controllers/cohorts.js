const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
module.exports = {
  getAll: function (req, res) {
    connection.query("SELECT * from cohort;", (err, data) => {
      if (err) throw err;
      console.log(data);
      return res.status(200).send(data);
    });
  },
  getstudInst: function (req, res) {
    connection.query(
        "SELECT * from instructor,student where cohortId=?;",
      req.params.cohId,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(200).send(data);
      }
    );
  },
  modifyCohort: function (req, res) {
    connection.query(
      `UPDATE cohort SET cohortName=? WHERE idcohort = ?`,
        [
          [req.body.cohortName],
          [req.body.cohId]
        ],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(201).send(data);
      }
    );
  },
  addcohort: function (req, res) {
    connection.query(
      "insert into cohort (cohortName) values(?)",
        req.body.cohortName,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(200).send(data);
      }
    );
  },
  deleteCohort: function (req, res) {
    connection.query(
      "DELETE from cohort where idcohort=?;",
      req.params.cohId,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return res.status(200).send(data);
      }
    );
  },
};
