class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  speak() {
    console.log(" hi there " + this.speaks);
  }
}

let dog1 = {
  name: "dog",
  legCount: 4,
  speaks: "bow bow"
}

let dog = new Animal("dog", 4, "bhow bhow");  // create the object
let cat = new Animal("cat", 4, "meow meow");
dog.speak(); // call function on object
cat.speak();



















// const dog = {
//   name : "doggle",
//   legCount: 2,
//   speaks: "bhow bhow"
// }
// const cat = {
//   name : "cat",
//   legCount: 2,
//   speaks: "meow"
// }

// function printStr(animal){
//   console.log("animal " + animal["name"] + " " + animal["speaks"]);
// }


// printStr(dog);
// printStr(cat);