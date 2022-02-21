const mongoose = require("mongoose");

const connectDb = async () => {
  const mongoUrl = process.env.MONGO_URL;
  return await mongoose.connect(mongoUrl);
};
module.exports = connectDb;
