//공 던지기
function solution(numbers, k) {
  let getBall = 1;

  for (let i = 0; i < k - 1; i++) {
    getBall += 2;
    if (getBall > numbers.length - 1) {
      getBall -= numbers.length;
    }
  }
  return getBall;
}