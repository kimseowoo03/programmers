//최댓값 만들기 (2)
function solution(numbers) {
  let desNum = numbers.sort((a, b) => b - a);
  let a = desNum[0] * desNum[1];
  let b = desNum[desNum.length - 1] * desNum[desNum.length - 2];
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a;
  }
}
