// Array 객체의 주요 메소드

let array = [2,7,1,3,4,8,6,9,5,10];

// 부분 가져오기
let list = array.slice(2,5);
console.dir(list);

// 삭제
let deleteList=array.splice(7,1) // 삭제 한 애 반환 해줌
console.dir(deleteList);

// 추가
// let addList = array.splice(1,0,'김기정 바보');
// console.dir(array);

// find() - 검색 메소드 활용

// 판별 함수
// function findCondition(num) {
//   if(num ==7) {
//     return true;
//   }
//   return false;
// } // 찾은 값을 가져옴


// 익명으로 만들자!!! (조건 삼항 연산자 이용해서..)
// let findNum =array.find(function(num){
//   return num ===7 ? true : false
// }); // 찾은 값을 가져옴


// 화살표 함수(람다식)으로..
let findNum =array.find(num => num===7 ? true : false); // 찾은 값을 가져옴
console.log(findNum);

// 배열에서 짝수만 가져오기
let evenList =  array.filter(num => num%2 ===0 || false);
console.log(evenList);


// 배열 반복 (순회) - forEach() 를 이용해서..
array.forEach((num, index) =>{
  console.log(num, index);
});


// 배열 정렬
//array.sort(); // 이렇게 하면 1다음에 10이 온다..
array.sort((num1,num2)=> {
  //return num1-num2; // 오름차순
  return num2-num1; // 내림차순
});
console.log(array);