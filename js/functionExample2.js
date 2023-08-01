// 중첩(helper) 함수 정의

function main() {
  console.log('주기능입니다...');

  function helper(num) {
    return Math.pow(num,2);
  }

  let x =10;
  let result = helper(x);
  console.log(result);
}

main();