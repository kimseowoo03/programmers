//최빈값 구하기
function solution(array) {
  let maxNum = Math.max(...array);
  let maxCount = 0;
  let count = 0;
  let num;

  if (array.length === 1) return array[0];
  for (let i = 0; i <= maxNum; i++) {
    count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === i) {
        count++;
      }
    }
    if (maxCount < count) {
      maxCount = count;
      num = i;
    } else if (maxCount === count) {
      num = -1;
    }
  }
  return num;
}