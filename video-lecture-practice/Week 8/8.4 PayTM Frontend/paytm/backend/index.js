// backend/index.js
const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000);
console.log(
  "the backend server was running on the : http://localhost:3000/signup"
);
