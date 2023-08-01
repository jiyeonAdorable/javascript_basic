//let user = new Object();
let user = {
  name : '김기정'
};

console.log(user.toString());
console.log(Object.prototype.isPrototypeOf(user));

let str = 'xxx';
let str1 = new String('xxx');
console.log(str.toString());
console.log(Object.prototype.isPrototypeOf(str)); //false
console.log(Object.prototype.isPrototypeOf(str1)); //true


// Object의 static 메소드 활용
// 객체 깊은 복사
let user2 = {};
Object.assign(user2,user);
console.dir(user2);

let prototypee = Object.getPrototypeOf(user);
console.dir(prototypee);