const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
});

const task = mongoose.model("task", TaskSchema);

module.exports = task;
