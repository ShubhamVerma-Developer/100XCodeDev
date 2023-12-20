const express = require("express");
const http = require("http");

const app = express();

const port = 4545;

function sum(n){
  let ans = 0;
  for(let i = 1; i<=n; i++){
    ans = ans + i;
  }
  return ans;
}


app.get("/", function(req, res){
  const n = req.query.n;
  const ans = sum(n);
  res.send("the sum is :" + ans);
})



// app.get("/", function(req, res){
//   throw new Error("asdasdsda");
// })

app.listen(port);

console.log(`the server was listen the port http://localhost:${port}`);


