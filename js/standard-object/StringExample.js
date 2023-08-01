let ssn = prompt('주민번호를 입력하라');
//680313-1234567
if (ssn) {
  const num =ssn.indexOf('-');
  const c = ssn.charAt(num+1);
  switch (c) {
    case '1': alert('2000년 이전 출생 남자');
      break;
    case '2': alert('2000년 이전 출생 여자');
      break;
    case '3': alert('2000년 이후 출생 남자');
      break;
    case '4': alert('2000년 이후 출생 여자');
      break;
    default:
      break;
  }
} else {
  alert('똑바로 입력해!');
}
