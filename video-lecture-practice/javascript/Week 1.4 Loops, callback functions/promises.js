var d = new Promise(function(resolve){
  setTimeout(function() {
    resolve("foo");
  }, 1000)
});

function callback() {
  console.log(d);
}

console.log(d);
d.then(callback);