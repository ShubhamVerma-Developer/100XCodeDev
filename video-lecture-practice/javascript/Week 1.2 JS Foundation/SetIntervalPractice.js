// 1. create a counter in javascript (counts down from 30 to 0)
// 2. Calculate the time it takes betweeen a setTimout call and the inner function actually running.
// 3. Create a terminal clock (HH:MM:SS)



// 1. create a counter in javascript (counts down from 30 to 0)
// let count = 5;

// function a(){
//   if(count > 0){
//     console.log(count);
//     count -= 1;
//   }
//   else{
//     clearInterval(a);
//   }
// }


//   setInterval(a, 1000);



// 2. Calculate the time it takes betweeen a setTimout call and the inner function actually running.

// let count = 0;

// function a(){
  
// }

// setTimeout(a, 6000);

// setInterval(a, 1000);




// 3. Create a terminal clock (HH:MM:SS)

function a() {
  const date = new Date();
  console.log(date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds());
}


setInterval(a, 1000);