const mongoose = require("mongoose");

const taskschema = new mongoose.Schema({
  step: {
    type: Number,
  },
  task: {
    type: String,
    maxlength: [25, "character must be less than 25"],
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const taskModel = mongoose.model("task", taskschema);

module.exports = taskModel;
