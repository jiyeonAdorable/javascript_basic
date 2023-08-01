// 전역 함수 선언
function doTask() {
  //console.log("어떤일을 합니다...");
  console.dir(this); // 함수 안에서 자기 자신은 window!(브라우저)
  console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}

// 객체 생성
let person = {
  name : '임지연',
  age : 25,
  doLearn : function() {
    console.log('배웁니다..');
  }
};


// 함수 직접 호출
doTask();

// 함수 간접(동적) 호출
doTask.call(); //Function.prototype 객체가 대신 호출해줌

// 객체를 포함시켜 간접 호출
doTask.call(person);

// 그니까 전역함수를 만들어서 객체마다 쓰고 싶은거네





// 특정 객체에 동적 속성 추가 기능
function addAttribute(key, value){
  this[key]=value;
}

addAttribute('name', '김기정'); // 객체 없이 실행하면 window 객체에 속성이 추가됨
addAttribute('age', '30');
console.dir(window);

let user ={};
addAttribute.call(user,'name','김기정');
addAttribute.call(user,'age','30');
console.dir(user);

// apply()는 call과 동일한 기능인데 전달인자를 배열로 받음
addAttribute.apply(user,['job','tutor']);

// bind()는 addAttribute() 함수를 user에 binding하여 함수를 반환
let addUserProperty = addAttribute.bind(user);
addUserProperty('gender','남자');
console.dir(user);

let array = [6,2,9,1];
for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const value = array[key];
    console.log(value);
  }
}