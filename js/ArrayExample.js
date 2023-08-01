// 배열 생성

// 빈 Array 객체 생성 (Array() 생성자 함수)
//let array = new Array();

// 배열 리터럴 표현식
let array =[30]; // {}를 안에 넣으면 객체를 넣는거임, 함수도 넣을 수 있음

// 배열에 원소 추가
array.push(10); // 맨 뒤에 담기
array.push('김기정 바보'); // 맨 뒤에 담기
array.push(new Student(10,'김기정',50,30,40));
array.push(new Student(11,'박상훈',90,100,95));
array.unshift(new Student(12,'이희영',90,100,95)); // 맨 앞에 담기

for (const value of array) {
  console.log(value);
}

// 둘이 같음
console.log(array[0]);
console.log(array['0']);

console.log(array.length);

// 배열 원소 삭제
//delete array[0]; // 얘는 잘 안씀
//array.pop(); // 맨 뒤 삭제
array.shift(); // 맨 앞 삭제
console.dir(array);