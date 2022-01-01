const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// import {PANCH_IN, PANCH_OUT} from "./constants";
// const PANCH_IN = require("./constants").PANCH_IN;

const PANCH_IN = "PANCH_IN";
const PANCH_OUT = "PANCH_OUT";
const SALARY = 100;

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let currentShift = null;
const shifts = [];

function getHoursDiff(start, end) {
  return Math.abs(new Date(start) - new Date(end)) / 36e5;
}

app.get("/panchtime/:action/:time", (req, res) => {
  const action = req.params.action;
  const time = Number(req.params.time);
  const panchedDate = new Date(time);
  let resText = "";

  if (action === PANCH_IN) {
    if (currentShift) {
      return res.status(500).send("ERROR, you are PANCH_IN!");
    }
    currentShift = { start: time };
    resText = `Shift started at: ${panchedDate.toLocaleTimeString()}`;
  } else if (action === PANCH_OUT) {
    if (!currentShift) {
      return res.status(500).send("ERROR, you are not PANCH_IN!");
    }
    currentShift = { ...currentShift, end: time };
    resText = `Your shift today was ${getHoursDiff(
      currentShift.start,
      currentShift.end
    )} hours`;
    shifts.push(currentShift);
    currentShift = null;
  }

  res.send(resText);
});

app.get("/shiftstime", (req, res) => {
  const listOfHours = shifts.map((shift) =>
    getHoursDiff(shift.start, shift.end)
  );
  let sum = 0;
  for (const hour of listOfHours) {
    sum += hour;
  }
  res.send(`You worked ${sum} hours.`);
});

app.get("/shiftsmoney", (req, res) => {
  const listOfHours = shifts.map((shift) =>
    getHoursDiff(shift.start, shift.end)
  );
  let sum = 0;
  for (const hour of listOfHours) {
    sum += hour;
  }
  res.send(`You made ${sum * SALARY} $.`);
});

app.all("*", (req, res) => {
  res.status(404).render("<h1> sorry :( </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
