// mongodb+srv://mordehai:<password>@cluster0.1hf6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// npm install mangoose --save
const mongoose = require("mongoose");
const key = require("./secret").MONGO_PASS;

async function conn() {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://mordehai:${MONGO_PASS}@cluster0.1hf6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const Cat = connection.model("Cat", { name: String });
    const kitty = new Cat({ name: "monchat2" });
    kitty
      .save()
      .then(() => connection.disconnect())
      .then(console.log("Done!"));
  } catch (e) {
    console.log(e);
  }
}
async function conn1() {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://mordehai:mangodb1971@cluster0.1hf6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const Ski = connection.model("Ski", {
      name: String,
      model: String,
      price: Number,
    });
    const kitty = new Ski({ name: "salomon", model: "race gs", price: 750 });
    kitty
      .save()
      .then(() => connection.disconnect())
      .then(console.log("Done!"));
  } catch (e) {
    console.log(e);
  }
}
async function find() {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://mordehai:${key}@cluster0.1hf6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const Cat = connection.model("Cat", { name: String });
    const cats = await Cat.find();
    console.log(cats);
    const ans = await connection.disconnect();
  } catch (e) {
    console.log(e);
  }
}
async function findOneAndUpdate() {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://mordehai:${key}@cluster0.1hf6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const Cat = connection.model("Cat", { name: String });
    const cats = await Cat.findOneAndUpdate(
      { name: "monchat" },
      { name: "monchat3" }
    );
    console.log(cats);
    const ans = await connection.disconnect();
  } catch (e) {
    console.log(e);
  }
}
findOneAndUpdate();
