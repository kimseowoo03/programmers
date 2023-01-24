//잘라서 배열로 저장하기
function solution(my_str, n) {
  let arr = my_str.split("");
  let answer = [];
  while (arr.length > 0) {
    answer.push(arr.splice(0, n).join(""));
  }
  return answer;
}
