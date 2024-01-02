const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin%40123@cluster0.asmzoce.mongodb.net/your-database-name"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });

  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  await user.save();
  console.log("User created successfully");
  res.json({
    msg: "User created successfully",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
