// for in문

// 배열 리터럴(선언, 생성, 초기화 동시에)
let array = [3,2,1,4,5,7];
for (let i = 0; i < array.length; i++) {
  const num = array[i];
  console.log(num);
}


// for in문 
for (let i in array) {
  console.log(i); // 얘는 순서...
  console.log(array[i]); // 얘가 배열 값
}


// 자바의 향상 for문과 동일
for(let num of array) {
  console.log(num);
}