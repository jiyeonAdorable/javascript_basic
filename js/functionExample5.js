// 표준 내장 함수

let x = confirm('너 바보냐?'); // 확인 true, 취소 false
console.log(x);


setTimeout(() => {
  console.log('2초 뒤에 콘솔창에 찍기');
}, 2000); // 단위가 밀리세컨드임

let second=1;
let timer = setInterval(() => {
  document.write(`<h3>${second}초</h3>`);
  second++;
}, 1000);

setTimeout(() => {
  clearInterval(timer); // 함수 멈추기
}, 10000);



// 문자열에 있는 숫자만 추출...? 뒤에 따로 있는 숫자는 안 가져오넹 ㅎㅎ
let money = '100원';
let num = parseInt(money);
console.log(num);

// NaN인지 확인하는 함수
let result = 1000/'김기정';
if(isNaN(result)){
  console.log('헐');
}