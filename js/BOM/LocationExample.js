/**
 * BOM 의 구조 - location
 */

// console.log(location.href);
// let url = 'https:www.naver.com';
// location.href=url;


function go(){
  let url = 'https:www.naver.com';
// location.href=url;
// location.assign(url);

// assign과 replace의 차이점 : assign과 href는 이동한후 뒤로가기가 가능하지만 
// replace 는 히스토리가 남지 않기때문에 불가능함
   //location.replace(url);
   location.reload();
}