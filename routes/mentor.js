const express = require("express");
const router = express.Router();

const Mentor = require("../connect/models/mentor.model");

router.get("/", async (req, res) => {
  console.log("get all mentors");
  try {
    const data = await Mentor.find();
    res.send(data);
  } catch (e) {
    console.log(e, "error");
    res.status(400).send(e);
  }
});

router.post("/", async (req, res) => {
  console.log("mentor create route");
  try {
    const data = await new Mentor(req.body);
    data.save();
    res.send(data);
  } catch (e) {
    console.log(e, "error");
    res.status(400).send("Error");
  }
});

router.get("/:id", async (req, res) => {
  console.log("show all students for particular mentor");
  console.log(req.params.id)
  try {
    const ment = await Mentor
      .findById(req.params.id)
      .populate("studentsAssigned", "name");
    res.send(ment);
  } catch (e) {
    console.log(e, "error");
    res.status(500).send("error in for 1 mentor get all students");
  }
});
module.exports = router;
