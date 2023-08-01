// 전역변수 선언
let global ='전역변수입니다..';




console.log(sum(3,5)); // Hoisting 되기 때문에 호출 가능 ㄷㄷ 답도 나오네

// 사용자 정의 함수
// 매개변수는 데이터 타입 선언 X
function sum(x, y) {
  return x + y;
}

function printGugudan() {
  document.write('<h2>for문을 이용한 구구단 출력</h2>')
  document.write('<table border=1>')
  for (let i = 2; i < 9; i++) {
    document.write('<tr>')
    for (let j = 1; j < 9; j++) {
      document.write(`<td> ${i} * ${j} = ${i * j} </td>`);
    }
    document.write('</tr>')
  }
  document.write('</table>')
}

function doTask() {
  let some = 100;
  let i=0; // 이렇게 쓰면 함수 블록 안이니까 밑에 출력 가능..
  for (i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); 
  // return undefined
}

// 디폴트 파라메터
function sendMessage(message="헐....") { // 파라메터를 받지 못하면 헐.... 출력
  console.log(message+"를 서버에 전달합니다....");
}

// Rest Parameter (비정형 인자)
function sum(...nums) { // 함수 오버로딩 - js도 매개변수가 다르면 됨
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}



// 함수 호출
let result = sum(2, 3);
console.log(result);
printGugudan();

// 함수 호출은 가능하나 오류뜸
let result1 = sum(10);
console.log(result1); // NaN

doTask();

sendMessage();
sendMessage('김기정 바보');

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));