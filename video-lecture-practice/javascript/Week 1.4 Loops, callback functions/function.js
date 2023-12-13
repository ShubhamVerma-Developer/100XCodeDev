// // finds the squre of the input
// function square(n) {
//   return n * n;
// }

// // finds the sum of the squres of the inputs
// function sumOfSqures(a, b){
//   const val1 = square(a);
//   const val2 = square(b);
//   return val1 + val2;
// }

// console.log(sumOfSqures(1, 2));

function square(a){
  return a * a;
}

function sumOfSomething(a, b, fn){
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

let a = 10, b = 20;
let ans = sumOfSomething(a, b, square);
console.log(ans);