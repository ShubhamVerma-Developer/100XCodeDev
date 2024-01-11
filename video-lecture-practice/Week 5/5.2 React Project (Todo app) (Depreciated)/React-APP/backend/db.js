const mongoose = require("mongoose");
require("dotenv").config();

// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// .env
const connectionString = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(connectionString);
console.log(connectionString);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
