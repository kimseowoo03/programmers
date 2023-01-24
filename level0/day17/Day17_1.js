//숫자 찾기
function solution(num, k) {
  let result;
  if (String(num).indexOf(k) !== -1) {
    result = String(num).indexOf(k) + 1;
  } else {
    result = String(num).indexOf(k);
  }
  return result;
}