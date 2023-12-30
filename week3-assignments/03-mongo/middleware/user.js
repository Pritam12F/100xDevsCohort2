const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  const found = await User.findOne({ username, password });
  if (found) {
    next();
  } else {
    res.status(403).send("Access denied");
  }
}

module.exports = userMiddleware;
