const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

const URL = process.env.MONGODB_URL || 3000

const db = async () => {
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("DB Connected");
  } catch (e) {
    console.log(e.message, "error in connecting db");
  }
};

module.exports = db