let x =99.1231421321.toFixed(2);

console.log(Number.MAX_VALUE);
console.log(x);

// x = new Number(x);
// console.log(x.toFixed());

let y = 34232;
// new 없이 직접 호출 시 형변환 함수로 동작 한다.
let result =Number(y); // 형변환 (원래 문자열 -> 숫자로 바꿀 때 사용함)
console.log(result);