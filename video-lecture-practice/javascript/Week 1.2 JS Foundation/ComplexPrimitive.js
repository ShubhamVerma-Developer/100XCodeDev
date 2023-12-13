// Complex Primitives 
// 1. Array
// 2. Object

// let person1 = "shubham";
// let person2 = "rohit";

// const personArray = ["shubham", "raman", "rohit"];

// console.log(personArray);

// console.log(personArray[0]);

// const ages = [21, 22, 23, 24, 25];

// for(let i = 0; i < ages.length; i++){
//   if(ages[i] % 2 == 0){
//     console.log(ages[i]);
//   }
// }

// const numberOfPeople = ages.length;
// for(let i = 0; i < numberOfPeople; i++){
//   if(ages[i] % 2 == 0){
//     console.log(ages[i]);
//   }
// }



// const person1 = "shubham";
// const gender1 = "male";

// const person2 = "rohit";
// const gender2 = "female";


// const personArray = ["shubham", "raman", "priya"];
// const genderArray = ["male", "male"];


// const user1 = {
//   firstName: "shubham",
//   gender: "male"
// }

// const value = [1, 2, 3];


// console.log("Value at index 0 is : ", value[0]);


const allUsers = [{
  firstName: "shubham",
  gender: "male"
}, {
  firstName: "raman",
  gender: "male",
  metadata: {
    age: 21,
    address: "jasodanagar"
  }
}, {
  firstName: "priya",
  gender: "female"
}]

for(let i = 0; i<allUsers.length; i++){
  if(allUsers[i]["gender"] == "male"){
    console.log(allUsers[i]["firstName"] + " : " +  allUsers[i].gender + " : " + allUsers[i].metadata?.address );
  }
}