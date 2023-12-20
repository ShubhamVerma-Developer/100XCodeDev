const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();
app.use(express.json());

fs.readFile("a.txt", "utf-8", function(err, data){
});


app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
  res.json({
    name: "shubham",
    age: 21
  })
})

app.get("/json", function(req, res){
  res.json({
    name: "shubham",
    age: 21,
    gender: "male"
  })
})


app.post("/sendrequest", function(req, res){
  console.log(req.headers);
  res.send({
    msg: "2 + 2 = 4"
  })
})


app.post('/backend-api/conversation', function(req, res){
  const message = req.body.message;
  console.log(message);
  res.json({
    output: "2 + 2 = 4"
  })
})

app.listen(port, function(){
  console.log(`The example server listen the port http://localhost:${port}`);
})

