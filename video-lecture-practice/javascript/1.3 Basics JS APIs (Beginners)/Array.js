// const initialArray = [1, 2, 3];
// console.log(initialArray);
// initialArray.push(2);
// console.log(initialArray);
// initialArray.pop();
// console.log(initialArray);
// initialArray.shift();
// console.log(initialArray);
// initialArray.unshift();
// console.log(initialArray);


// ------concat-----
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2));

// //----forEach()------
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// for(let i=0; i<arr1.length; i++){
//   console.log(arr1[i]);
// }

// console.log(arr1.forEach());


// function logThing(str) {
//   console.log(str);
// }

// arr1.forEach(logThing);


function log1() {
  console.log("hello world 1");
}

function log2() {
  console.log("hello world 2");
}

function logWhatsPresent(fn){
  fn();
}

logWhatsPresent(log2)