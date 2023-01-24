//팩토리얼
function solution(n) {
  let sum = 1;
  let result;
  //2부터 차례대로 곱하기
  //맞아 떨어지거나, 작은 경우
  for (let i = 1; i <= 10; i++) {
    sum *= i;
    if (sum <= n) {
      result = i;
    }
  }
  return result;
}