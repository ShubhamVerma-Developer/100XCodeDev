// Functions 

// 1. Abstract out logic in your program
// 2. Take arguments as an input
// 3. Return a value as an output
// 4. You can think of them as an indepeneded program that is supposed to do something give an input
// 5. Functions can take other functions as input - this will confuse you (collbacks)

// Let's write some code - : 
// 1. Write a function that finds the sum of two numbers 
// 2. Write another function that display this result in a pretty formate
// 3. Write another function that takes this sum and prints in in passive tense

// function Sum(a, b) {
//   const sumValue = a + b;
//   return sumValue;
// }

// const result1 = Sum(1, 2);
// const result2 = Sum(1, 2);
// console.log("The Result is: " + result1);
// // console.log(Sum(3, 5));



// let sum = 0;
// for(let i = 0; i < 1000000000000; i++){
//   sum += i;
// }
// console.log(sum);

function sum(num1, num2, fnToCall){
  let result = num1 + num2;
 fnToCall(result);
}

function displayResult(data){
  console.log(`The result of sum is ${data}`);
}

function displayResultPassive(data){
  console.log(`Sum's result is : ` + data);
}

const ans = sum(1, 2, displayResult);

