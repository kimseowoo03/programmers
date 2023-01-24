//대문자와 소문자
function solution(my_string) {
  let result = ''
  for (let x of my_string) result += x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase();
  return result;
}