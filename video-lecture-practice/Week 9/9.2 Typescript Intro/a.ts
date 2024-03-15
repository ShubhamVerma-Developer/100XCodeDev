interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

// function isLegal(user: User) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isLegal = (user: User) => {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
};

function greet(user: User) {
  console.log("hi there " + user.firstName);
}

isLegal({
  firstName: "shubham",
  lastName: "verma",
  age: 20,
});

greet({
  firstName: "shubham",
  lastName: "verma",
  age: 20,
});
