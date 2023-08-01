// 템플릿 스트링 물결 키(`) - 문자열을 쉽게 추가? 할 수 있음

let name ='김기정';
let message =`템플릿 스트링 ${name}`; // 문자열 합치기 + 연산자 대신
console.log(message);


// typeof 연산자
let age= 10;
console.log(typeof age);

// 특수 숫자리터럴(키워드)
console.log(10/0); // Infinity  자바는 exception 떨어짐 (10/0.0 하면 infinity 뜨긴 함)
console.log(-10/0); // -Infinity
console.log('나는 김기정입니다.'/10); // NaN (Not a Number) 자바는 컴파일이 안됨


// 논리형
let flag = false;
let flag2 = 1; // 얘도 됨.. (true) '바보' 해도 true 됨..... ''(공백)은 false넹 ㅋㅋ
// undefined도 false, null도 false, infinity는 true.. NaN는 false 대충 무슨 느낌인지 알겠다.

if (flag2) {
  console.log('참입니다..');
}


// 자바스크립트는 자동형변환이 엄청 많이 발생한다.
console.log('1000'*4); // 4000
console.log('1000'/'4'); // 250  문자열끼리도 나눠진다 ㄷㄷㄷ