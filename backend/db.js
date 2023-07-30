const mongoose = require("mongoose");
require('dotenv').config();

const mongoURI = "<YOUR MONGO DB URI>";
const connectToMongo = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("connected to server successfully");
  });
};

module.exports = connectToMongo;
