
// ES6 이전의 변수 선언
// 변수 재선언 가능
var message;
var message;
message = 'Java가 최고야~~~~';
message = '웹 프로그래밍 언어의 최강자 JavaScript';

// 콘솔창 출력
console.log(message);



// 선언 이전에도 사용 가능
console.log(age);   // 문법 에러가 안뜨는데 undefined 뜸
var age = 10; 

var weight;
console.log(weight); // 초기화가 안됐는데도 사용가능


// 동적 타입핑
let message2;
message2='Java가 최고야~~~~~';
message2=10;
message2=15.5;
console.log(message2);

// 자바스크립트 출력 방법 3가지
console.log(message2); // 디버깅용
document.write('문서에 동적 출력'); // 문서에 출력 - 근데 안 씀... 없다 생각해..
alert('메세지 창입니다.'); // 얘 함수임


// 상수 처리
const MAX=100;
console.log(MAX);