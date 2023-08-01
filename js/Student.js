// 학생객체 생성을 위한 틀 (생성자 함수)

function Student(ssn, name, korean, english, math) {
  // this = {};
  this.ssn = ssn;
  this.name = name;
  this.korean = korean;
  this.english = english;
  this.math = math;

  // this.getSum = function() {
  //   return this.korean +this.english + this.math;
  // }

  // this.getAverage =function() {
  //   return this.getSum()/3;
  // }

  // this.toString = function() {
  //   return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math}`
  // }

  //return this;

}

// 공통 속성 및 메소드 추가 (static) - prototype말고 Student 자체에 넣으면 된다.
Student.schoolName='Ezen 초등학교';
Student.showSchoolName = function() {
  alert(Student.schoolName);
}

// 생성자 함수(객체)의 메소드를 Student의 프로토타입 객체에 할당
Student.prototype.getSum = function() {
    return this.korean +this.english + this.math;
  }

Student.prototype.getAverage =function() {
    return this.getSum()/3;
  }

  // Object 프로토 타입 객체의 toString() 오버라이딩
Student.prototype.toString = function() {
    return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math}`
  }


let student1 = new Student(10,'김기정',90,80,70);
let student2 = new Student(10,'김기정',90,80,70);
let student3 = new Student(10,'김기정',90,80,70);
 console.log(student1.toString()); // 프로토 타입 객체의 toString() 메소드 호출
 console.log(student2.toString());
 console.log(student3.toString());


 // 프로토 타입 상송 체인 검증
 // Object 프로토타입 객체의 메소드 재사용
 console.log(student1.hasOwnProperty('name'));

 // in 연산자는 부모까지 검사
 console.log(student1.hasOwnProperty('valueOf')); //false
 console.log(('valueOf')in student1); //true

 // 프로토 타입 '객체'이기 때문에 삭제도 가능
 //delete student1.prototype;

// constructor 쓰임새
function doTask(object) {
  // 부모자식이 아니라 Student 일때만!
  if(object.constructor === Student) {
 //if(object instanceof Object) {
    console.log('학생일때만 수행되는 메소드입니다.');
  }
}

doTask({});
doTask(student1);


Student.showSchoolName();