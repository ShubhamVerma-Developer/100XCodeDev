// const users  = {
//   name: "shubham",
//   age: 21,
//   gender: "male"
// }

// console.log(users["name"]+ " : " + users["age"] + " : " + users["gender"]);


// const user = '{name: "shubham", age:21  }';

// console.log(user);


const users = '{"name": "shubham", "age":21, "gender": "male" }';

// JSON.parse
// JSON.stringify

// const user = JSON.parse(users);
// console.log(user["gender"]);


const user = {
  name: "shubham",
  gender: "male"
}

const finalString = JSON.stringify(user);
console.log(finalString["name"]);