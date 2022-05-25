const mongoose = require("mongoose");

// todo schema
const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  tags: [String],
  created: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
