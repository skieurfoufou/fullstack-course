const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const { postsRouter, usersRouter } = require("./routes/index");
const connectDb = require("./models/connectToDb");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/posts", postsRouter);
app.use("/users", usersRouter);

// app.get("/", (req, res) => {
//   res.send("you called GET");
// });

// app.post("/", (req, res) => {
//   res.send("you called POST");
// });

// app.put("/", (req, res) => {
//   res.send("you called PUT");
// });

// app.delete("/", (req, res) => {
//   res.send("you called DELETE");
// });

app.listen(port, async () => {
  console.log("i am in the air", port);
  try {
    await connectDb();
    console.log("i am connected");
  } catch (err) {
    console.log("i am not connected !");
  }
});
