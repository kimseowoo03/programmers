//배열의 평균 값
function solution(numbers) {
  let sumNum = numbers.reduce((a, b) => a + b);
  return sumNum / numbers.length;
}