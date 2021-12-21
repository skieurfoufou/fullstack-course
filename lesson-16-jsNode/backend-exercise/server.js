// --- IMPORTS ---
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { application } = require("express");

// --- CONSTANTS ---
const PORT = 8080;

// --- MAIN ---
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  if (id === "1234") {
    res.send("Client Found!");
  }
  res.status(418).send("banana!");
});

app.post("/users", (req, res) => {
  console.log("/users");
  console.log(req.body);

  const { withFart } = req.query;
  const bodyToSend = req.body;

  if (withFart) {
    bodyToSend.fart = true;
  }

  res.status(201).send(bodyToSend);
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
