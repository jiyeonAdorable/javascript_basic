// 콜백 함수는 왜 써야 하는가? (메모리 관리?ㅎㅎ)

function calculate(fn, a, b) {
  // 데이터 처리
  return fn(a,b);
} // 이러면 결국 더하는 함수는 한번 사용하고 메모리 상 사라지는 것이다.

let num1 = 300, num2 = 500;

let result = calculate(function (x, y) {
  return x+y;
},num1,num2);
console.log(result);

let result2 = calculate(function (x, y) {
  return x*y;
},num1,num2);

console.log(result2);


// 화살표 함수
result = calculate((x,y)=>x+y,num1,num2);
console.log(result);


// 즉시 호출(self 함수)

(function doTask() { // 함수를 (여기에!)();
  console.log("나는 즉시 호출됩니다.....");
})();