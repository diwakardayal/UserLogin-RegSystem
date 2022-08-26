const router = require("express").Router();
const bcrypt = require("bcrypt");

const Jwt = require("jsonwebtoken");
const Login = require("../model/Login");
const Register = require("../model/Register");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  let login = await Register.findOne({
    username: username,
    password: password,
  });

  if (login) {
    const token = Jwt.sign({ username }, process.env.SECRETKEY, {
      expiresIn: "2h",
    });

    return res.status(200).json({ token: token, username: username });
  } else {
    return res.status(400).send("Wrong Username/Password");
  }
});

module.exports = router;
