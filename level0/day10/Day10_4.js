//배열 회전시키기
function solution(numbers, direction) {
  if (direction === "right") {
    let popNum = numbers.pop();
    numbers.unshift(popNum);
  } else {
    let shiftNum = numbers.shift();
    numbers.push(shiftNum);
  }
  return numbers;
}