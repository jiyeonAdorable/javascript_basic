// 함수 리터럴 표현식

let myFunction = function (message) { // 익명 함수 ~~
  console.log(message);
}


// 함수 fn을 받아 호출
function doTask(fn) {
  // 콜백 함수...
  fn();
}


// 함수 호출
myFunction('함수 리터럴 표현식입니다...');

doTask(myFunction);