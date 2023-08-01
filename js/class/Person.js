class Person {

  // 정적 속성(static)
  static commonAttribute='공통속성';

  // 정적 메소드 (static)
  static commonMethod() {
    console.log('공통 메소드입니다...');
  }

  constructor(name, age) {
    //this = {};

    this.name = name;
    this.age = age;

    //return this;
  }

  // getter, setter
  get name() {
    return this._name;
  }

  set name(name) {
    // 데이터 유효성 검증
    if (name === undefined) {
      throw new Error('이름을 반드시 입력해주세요.');
    }
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if(age < 10 || age > 100){
      throw new Error('나이는 10-100세 사이만 가능');
    }
    this._age = age;
  }

  // 메소드
  showInfo() {
    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
  }
}

let person = new Person('김기정', 30);
person.name = '강기정';
console.log(person.name);
console.log(person.age);
person.showInfo();


// 예외처리
try {
  person.name = undefined;
} catch (e) {
  alert(e.message);
}

try {
  person.age = 100000;
} catch (e) {
  alert(e.message);
}

// js는 static은 클래스로 접근해야한다.
Person.commonMethod();
console.log(Person.commonAttribute);


