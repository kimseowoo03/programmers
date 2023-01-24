//문자열 밀기
function solution(A, B) {
  let aArr = A.split("");
  for (let count = 0; count < A.length; count++) {
    let lastNum;
    if (aArr.join("") === B) return count;
    if (aArr.join("") !== B) {
      lastNum = aArr.pop();
      aArr.unshift(lastNum);
    }
  }
  return -1;
}