// 학생객체 생성을 위한 틀 (클래스)
export
class Student {

  constructor(ssn, name, korean, english, math) {
    // this = {};
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
    //return this;
  }

  // 공통 속성 및 메소드 추가 (static)
  static schoolName = 'Ezen 초등학교';
  static showSchoolName() {
    console.log((Student.schoolName));
  }

  getSum() {
    return this.korean + this.english + this.math;
  }

  getAverage() {
    return this.getSum() / 3;
  }

  // Object 프로토 타입 객체의 toString() 오버라이딩
  toString() {
    return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math}`
  }

}

let student = new Student(10, '김기정', 90, 80, 70);
let student2 = new Student(10, '김기정', 90, 80, 70);
let student3 = new Student(10, '김기정', 90, 80, 70);
console.log(student.toString()); // 프로토 타입 객체의 toString() 메소드 호출
console.log(student2.toString());
console.log(student3.toString());

console.dir(student);

console.log(student.hasOwnProperty('name'));

 // in 연산자는 부모까지 검사
 console.log(student.hasOwnProperty('valueOf')); //false
 console.log(('valueOf')in student); //true

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
doTask(student);


Student.showSchoolName();