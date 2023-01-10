const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./connect/db");
const studentRoute = require("./routes/student");
const mentorRoute = require("./routes/mentor");
const mentstud = require('./routes/mentstud');
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Working fine...");
});

app.use("/student", studentRoute);
app.use("/mentor", mentorRoute);
app.use("/assignMentorStudent", mentstud);


app.listen(process.env.PORT || 3000, async (err) => {
  await db();
  console.log(`Started server running in PORT ${process.env.PORT}`);
  if (err) {
    console.log(err, "error in starting server");
  }
});
