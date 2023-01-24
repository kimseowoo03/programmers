//중앙값 구하기
function solution(array) {
  let asArray = array.sort((a, b) => a - b);
  let num = Math.floor(asArray.length / 2);
  return asArray[num];
}