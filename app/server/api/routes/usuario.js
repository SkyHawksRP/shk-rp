const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get("/all", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query("SELECT * FROM user", (error, resultado, fields) => {
      conn.release(); //MUITO IMPORTANTE
      if (error) {
        return res.status(500).send({ error: error });
      }
      return res.status(200).send({ response: resultado });
    });
  });
});

router.post("/create", (req, res, next) => {
  const user = {
    nickname: req.body.nickname,
    password: req.body.password,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    adminlevel: req.body.adminlevel || 1,
  };
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "INSERT INTO user (user_nickname,user_password,user_email,user_firstname,user_lastname,user_adminlevel) VALUES(?,?,?,?,?,?)",
      [
        user.nickname,
        user.password,
        user.email,
        user.firstname,
        user.lastname,
        user.adminlevel,
      ],
      (error, resultado, fields) => {
        conn.release(); //MUITO IMPORTANTE
        if (error) {
          return res.status(500).send({ error: error });
        }
        return res.status(200).send({ response: resultado });
      }
    );
  });
});

module.exports = router;
