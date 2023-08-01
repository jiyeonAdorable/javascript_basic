// 이벤트 소스에 이벤트 리스너 등록
function eventListener() {
  console.log('왜 눌렀나요?');
}


document.querySelector('button').addEventListener('click',event => {
  console.dir(event);
  if(event.ctrlKey){
  event.target.style.backgroundColor='blue';
  console.log('왜 눌렀어??')}}
  );
  

  document.querySelector('button').addEventListener('mouseenter', function(event) {
    this.style.backgroundColor ='yellow';
  });

  document.querySelector('button').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor ='';
  });


function serverSend(message) {
  console.log(message+'를 서버에 전송합니다..');
}


 let input = document.querySelector('[type=text]');
 input.addEventListener('keypress',event=>{
  //console.log(input.value);
  if(event.keyCode===13){ // 13이 엔터임
    const message = input.value;
    serverSend(message);
  }
 });

// name 속성 접근 방법 (form 네임속성.select 네임 속성)
//console.dir(document.frm.search);
document.frm.search.addEventListener('change',event => {
  //console.dir(event.target.options);
  let options = event.target.options;
  let selectValue = options[options.selectedIndex].value;
  console.log(selectValue);
});

