// 생성자 함수를 이용한 객체 틀

function Dog(name, age, kind){ // 메소드는 따로 만들어야 함
  //this= {};
  this.name = name;
  this.age = age;
  this.kind = kind;
 

  // 기능 (메소드) 추가
  this.cry = function() {
    console.log(`${this.name}가 웁니다...`);
  }
 // return this; - 자동으로 해줌
}


// 생성
let dog = new Dog('루니',8,'비숑');
console.log(dog);
dog.cry();

let dog2 = new Dog('꼬미',8,'스트릿'); // new를 안써도 컴파일 오류가 안나는데 값은 undefined..
// new 를 사용하지 않으면 생성자 함수에서 주석한 this={};, return this;를 안해줌..
console.log(dog2);
dog2.cry();


// 자바스크립트 표준 객체(생성자 함수)를 사용
let string = new String('김기정입니다...'); // 명시적 생성
const count = string.length;
console.log(count);

let string2 = '김기정입니다...'; // 묵시적 생성
let count2=string2.length;
console.log(count2);

let ssn ='680313-1234567';
let ch= ssn.charAt(7);
switch (ch) {
  case '1': console.log('남자'); break;
  case '2': console.log('여자'); break;

  default: console.log('누구?');
    break;
}

let number = new Number(10);
console.log(number);
let bool = new Boolean(true);
console.log(bool);

// 날짜 객체
let today = new Date();
console.log(today.toLocaleString());

// 배열을 객체로 제공함..
// 자바의 List, Set, Que, Stack 기능이 들어있는 배열...
let array = new Array();

