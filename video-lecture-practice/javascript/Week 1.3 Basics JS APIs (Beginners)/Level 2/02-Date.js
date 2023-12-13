// const currentDate = new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(currentDate.getYear());
// console.log(currentDate.getFullYear());


// function calculateSum() {
//   let a = 0;
//   for(let i = 0; i<1000443400; i++){
//     a = a + i;
//   }
//   return a;
// }





// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime();
// calculateSum();


// const afterDate = new Date();
// const afterTimeInMs = beforeDate.getTime();

// console.log(afterDate - beforeDate);




setInterval(()=>{
    let cDate = new Date();
    console.log(cDate.getHours() + " : " + cDate.getMinutes() + " : " + cDate.getSeconds());
}, 1000);