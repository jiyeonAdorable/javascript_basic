// 강아지 객체 즉시 생성 (틀 없이)
// 객체 리터럴 표현식

let dog = {
  // 키 : 값
  name : '루니',
  age : 8,
  kind : '비숑',
  // 함수이름은 속성이니까 안써도댐
  eat : function () {
    console.log(this.name+'가 무척 잘 먹습니다....'); // 자기 속성 쓸 때 this
    // 그냥 name 하면 전역변수 name을 찾음
  },  // 오버라이딩..? 뭐라는걸까..
  toString : function() {
    return '헐';
  }
};

// 객체의 속성 검색
console.log(dog.name); // 접근
console.log(dog['name']); // 키로 접근   (CSS 접근할 때 사용 할 수 있음..)
console.log(dog.kind); // 접근

dog.eat(); // 객체 함수 출력


// 객체 속성 변경
dog.name = '로니';
console.log(dog.name);

// 속성 제거
delete dog.age;
console.log(dog.age);

// 기능 추가
dog.work = function(){
  console.log('잘 걷습니다..');
}

dog.work();


// in 연산자 (객체의 속성 존재 여부 반환)
console.log('name' in dog);
console.log('age' in dog);


// for in 반복문 (배열이나 객체의 속성 반복)
for (const key in dog) {
  console.log(key, dog[key]); // 이 때 [] 쓰네
}

// for of는 객체에는 못 씀, 배열같이 순차적으로 접근 가능한 것만 가능


console.clear(); // 콘솔창 지워줌

// Java처럼 toString이 있을까? - 있다.
console.log(dog);
// 근데 얘는 다르네..? js는 부모가 2개다?
console.log(dog.toString());

// dir 디버깅
console.dir(dog); // 너는 뭐냐....