const express = require("express");
const zod = require("zod");
const app = express();
// const schema = zod.array(zod.number());
//
// {
//  email: string => email
//  password: atleast 8 letters
//  country: "IN", "US"
//  }

const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.string("IN", or(z.literal("US"))),
  kidneys: zod.array(z.number()),
});

app.use(express.json());

app.post("/demo", function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  }
  res.send({
    response,
  });
});

app.listen(3001);

console.log("the server was running on https://localhost:3001");
