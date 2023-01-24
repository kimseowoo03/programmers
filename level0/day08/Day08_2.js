//외계행성의 나이
function solution(age) {
  let en = 'abcdefghij';
  return age.toString().split('').map(x => en[+x]).join("")
}