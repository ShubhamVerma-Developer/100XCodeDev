// map, fileter, arrow function
// given an array, give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

// const input = [1, 2, 3, 4, 5];

// const newArray = [];

// for (let i = 0; i < input.length; i++) {
//   newArray.push(input[i] * 2);
// }

// console.log(newArray);

// const ans = input.map(function (i) {
//   return i * 2;
// });
// console.log(ans);

// create a map function that takes 2 inputs
// an array, and a transfromation callback/fn
// and transforms the array iunto a new one using the transformation fn

// Filtering
// What if I tell u, given an input array, give me back
// all the even values from it

// const arr = [1, 2, 3, 4, 5];

// ans
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// const arr1 = [1, 2, 3, 4, 5];

// // ans
// function filterLogic(n) {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const ans = arr.filter(filterLogic);
// console.log(ans);

// const arr = ["shubham", "raman", "prash"];

// const ans = arr.filter(function (n) {
//   if (n.startsWith("s")) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(ans);

// create a map fn that takes an array and a transform fn as input
// array as output
