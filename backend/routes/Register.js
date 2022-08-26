const router = require("express").Router();
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const Register = require("../model/Register");

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  let register = await Register.findOne({ username: username });
  if (register) {
    return res.status(400).send("User already exist");
  } else {
    register = new Register({
      username: username,
      email: email,
      password: password,
    });
    await register.save();

    res.send(register);
  }
});

module.exports = router;
