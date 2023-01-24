//특정 문자 제거하기
function solution(my_string, letter) {
  return [...my_string].filter((x) => x !== letter).join("");
}