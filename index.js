// Express setup
// clean code
// DRY code Don't repeate yourself
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// nicht sicher
app.get("/", (req, res) => {
  res.send("Home");
});

// sicher
app.post("/about", (req, res) => {
  console.log(req.body);
  res.send(`welcome ${req.body.username}`);
});

function userLogged(req, res, next) {
  if (req.query.name == "admin") {
    req.userName = "admin";
    next();
  } else {
    res.send("Sorry you can't see this page");
  }
}
app.listen(PORT, () => {
  console.log(`Server is here and listening http://localhost:${PORT}`);
});
