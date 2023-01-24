//진료순서 정하기
function solution(emergency) {
  let sortNum = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sortNum.indexOf(v) + 1);
}