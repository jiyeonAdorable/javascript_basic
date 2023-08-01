// 함수를 만드는 방법 3가지!
// 1. 함수 선언문
// 2. 함수 (리터럴) 표현식
// 3. Function 생성자 함수를 이용한 동적 함수 생성

// 스크립트 준비단계에서 하는 동작
// 얘가 먼저 생성됨
// function Function() { - 일급 객체
  // ~~~~~~~
// }

// 표준 내장 객체 (3번을 이용하여 만든다.)
// let Object = new Function('~~~~~~~~');
// let String = new Function('~~~~~~~~');
// let Date = new Function('~~~~~~~~');
// let Number = new Function('~~~~~~~~');
// let Boolean = new Function('~~~~~~~~');

// 동적으로 함수 만들어보기 (우리는 잘 안쓸 것이다.. 이건 js로 솔루션 할 때나 쓴다.)
let sum = new Function('x', 'y', 'return x+y');
let result = sum(10,20);
console.log(result);


// 함수도 객체니까...
function doTask() {
  console.log('헐.....');
}

doTask();
// . 뒤에 뭐가 많다....
doTask.call(); // Function의 메소드 중 하나

