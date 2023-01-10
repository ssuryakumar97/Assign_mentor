const express = require("express");
const router = express.Router();

const student = require("../connect/models/student.model");


router.get("/", async (req, res) => {
  console.log("get all Students");
  try {
    const data = await student.find();
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.post("/", async (req, res) => {
  console.log("Student create route");
  try {
    const data = await new student(req.body);
    data.save();
    res.send(data);
  } catch (e) {
    console.log(e.message, "error");
    res.status(500).send("Error in student POST");
  }
});

module.exports = router;
