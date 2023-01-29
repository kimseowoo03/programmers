//최빈값 구하기
function solution(array) {
  let maxNum = 0;
  let count = 0;

  let arrayInNum = [...new Set(array)];

  for (let i = 0; i < arrayInNum.length; i++) {
    let dupNum = array.filter((num) => num == arrayInNum[i]).length;
    if (count == dupNum) maxNum = -1;
    if (count < dupNum) {
      count = dupNum;
      maxNum = arrayInNum[i];
    }
  }
  return maxNum;
}
