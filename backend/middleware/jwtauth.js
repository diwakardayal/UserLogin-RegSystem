const Jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
  let token = req.headers["token"];
  if (token) {
    Jwt.verify(token, process.env.SECRETKEY, (err, valid) => {
      if (err) {
        res.status(401).json({ error: err });
      } else {
        req.user = valid.id;
        next();
      }
    });
  } else {
    res.status(401).send("Please provide the token");
  }
}

module.exports = { verifyToken };
