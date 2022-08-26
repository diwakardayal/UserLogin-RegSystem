const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const userRegistration = require("../backend/routes/Register");
const userLogin = require("../backend/routes/Login");
// app.use(cors());

//  database config
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected"))
  .catch((err) => console.log("ERROR: ", err));

app.get("/", async (req, res) => {
  res.send("WORKING");
});

app.use("/api/register", userRegistration);
app.use("/api/login", userLogin);

app.listen("5001", () => {
  console.log("server running at 5001 http://localhost:5001/");
});
