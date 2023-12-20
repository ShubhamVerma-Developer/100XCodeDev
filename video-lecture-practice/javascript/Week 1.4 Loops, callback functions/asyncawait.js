function findSum(n) {
  let ans = 0;
  for(let i=0; i<n; i++){
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

function syncSleep() {
  let a = 1;
  for(let i = 0; i<100000000; i++){
    a++;
  }
}


// setTimeout(findSumTill100, 7000);
syncSleep();
// findSumTill100();
setTimeout(findSumTill100, 1000);
console.log("This is printed first");


