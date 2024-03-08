const axios = require("axios");

async function main() {
  const response = await axios.get(
    "https://httpdump.app/dumps/3f988e66-8c63-403d-85e0-caf0838628ee"
  );
  console.log(response.data);
}

main();

// async function main() {
//   const response = await axios.post(
//     "https://httpdump.app/dumps/3f988e66-8c63-403d-85e0-caf0838628ee",
//     { username: "shubham", password: "12345678" },
//     { headers: { Authorization: "Bearer 123" } }
//   );
//   console.log(response.data);
// }
// main();

// function main() {
//   fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
//     const json = await response.json();
//     console.log(json);
//     await response.text();
//   });
// }

// main();

// function show() {
//   fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//     const json = await res.json();
//     console.log(json);
//   });
// }

// show();

// async function main() {
//   const response = await fetch("https://sum-server.100xdevs.com/todos");
//   const json = await response.json();
//   console.log(json.todos.length);
// }

// main();
