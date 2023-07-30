const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI =
  "mongodb+srv://kevinpereira2113:tBtn2hkp28WubfBU@cluster0.cnwjerc.mongodb.net/iNotebook?retryWrites=true&w=majority";
const connectToMongo = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("connected to server successfully");
  });
};

module.exports = connectToMongo;
