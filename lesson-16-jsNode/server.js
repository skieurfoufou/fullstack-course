const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hi from home!");
});

app.get("/users", (req, res) => {
  res.send("hi users!");
});

app.get("/users/joke/haha/notfunny", (req, res) => {
  res.send("hi not funny!");
});

app.get("/food/:item", (req, res) => {
  const item = req.params.item;
  res.send(`you picked ${item}`);
});

app.get("/food/:item/yummy/:user", (req, res) => {
  const item = req.params.item;
  const theBestMen = req.params.user;
  res.send(`you picked ${item}, user is : ${theBestMen}`);
});

app.get("/ab*cd", (req, res) => {
  res.send(`good pattern`);
});

app.post("/adduser", (req, res) => {
  console.log(req.body);
  res.send(`add user!!!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});