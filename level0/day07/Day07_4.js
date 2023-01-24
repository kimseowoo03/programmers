//짝수의 합
function solution(n) {
  let sumNum = 0;
  for (let i = 2; i <= n; i += 2) {
    sumNum += i;
  }
  return sumNum;
}