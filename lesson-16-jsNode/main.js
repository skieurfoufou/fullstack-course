const button = document.getElementById("button");
button.addEventListener("click", onClickButton);
const inputFname = document.getElementById("fname");
const inputLname = document.getElementById("lname");
const inputMessage = document.getElementById("message");

let objMes = { fname: fname, lname: lname, message: message };

function onClickButton({ objMes }) {
  objMes.fname = inputFname.Value;
  objMes.lname = inputLname.Value;
  objMes.message = inputMessage.Value;
}
console.log(objMes);

/*
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.listen(port);

let cors=require("cors");
app.use(cors());
*/
