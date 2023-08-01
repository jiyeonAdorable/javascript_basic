console.dir(window.document.firstChild); // html의 첫줄
console.dir(document.firstElementChild); // html 객체
console.dir(document.firstElementChild.constructor); // html 객체의 생성자

// 돔트리 계층 구조로 검색
// Node의 공통 속성 3개
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodeName);
console.log(document.firstElementChild.nodeValue);


// body 요소 접근
console.log(document.firstElementChild.lastElementChild.nodeName);


// #2. get메소드로 특정 요소 접근 (잘 안씀)
let pArray = document.getElementsByTagName('p');

//getElementsByTagName의 리턴타입은 배열이 아니고 유사배열이다.
// 유사배열이라 배열의 forEach는 안되고 for in 이나 for of사용
console.log(pArray.constructor);
for (const i in pArray) {
  console.log(pArray[i].nodeName);
}
for (const element of pArray) {
  console.log(element.nodeName);
}

let pE = document.getElementById('myP');
console.dir(pE);

// 유사배열
let htmlCollection = document.getElementsByClassName('container');
console.dir(htmlCollection);


console.clear();


// #3. CSS 선택자를 이용한 검색
//console.dir(document.querySelector('p'));
let nodeList = document.querySelectorAll('p');
for (const pe of nodeList) {
  console.log(pe.nodeName);
}

let pElement = document.querySelector('#myP');
console.log(pElement.nodeName);

let textNode = pElement.firstChild;
console.log(textNode.nodeName);
console.log(textNode.nodeValue);

console.log(document.querySelector('.container').firstChild.nodeValue);

console.log(document.querySelector('li:first-child').firstChild.data);
console.log(document.querySelector('li:last-child').firstChild.data);
let list = document.querySelectorAll('li:nth-child(2n+1)');
list.forEach(element => {
  console.log(element.firstChild.nodeValue);
});
