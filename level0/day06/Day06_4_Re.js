//문자 반복 출력하기
function solution(my_string, n) {
  return [...my_string].map((x) => x.repeat(n)).join("");
}