console.log("1 실행");
doTask();
console.log("2 실행");

function doTask() {
  setTimeout(() => {
    console.log('doTask() 실행');
  },1000);
}
console.log("3 실행");

