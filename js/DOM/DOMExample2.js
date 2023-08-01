// 동적 스타일 적용하기

let list =document.querySelectorAll('li');
list.forEach(element=>{
  element.style.color='white';
  element.style['background-color']='blue';
});


// CSS 클래스 선택자 적용
let list2 =document.querySelectorAll('h1')
list2.forEach(element=> {
  element.className='head';
})

let list3 =document.querySelectorAll('h1')
list2.forEach(element=> {
  element.classList.add('a');
  element.classList.remove('a');
  // setInterval(() =>{
  //   element.classList.toggle('head');
  // },1000);
})

