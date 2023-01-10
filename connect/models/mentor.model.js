const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    expertise: {
      type: String,
      required: true,
    },
    studentsAssigned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
      }]
  });
  
  module.exports = mongoose.model("mentor", mentorSchema);