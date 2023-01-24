//숨어있는 숫자의 덧셈 (2)
function solution(my_string) {
  let arr = [];
  let dupNum = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(Number(my_string[i]))) {
      //숫자만 거르기
      if (!isNaN(Number(my_string[i + 1]))) {
        //뒤에 숫자를 뒀던 애
        dupNum++;
      } else {
        if (dupNum > 0) {
          arr.push(my_string.substr(i - dupNum, dupNum + 1));
          dupNum = 0;
        } else {
          arr.push(my_string[i]);
        }
      }
    }
  }
  return arr.reduce((a, b) => a + Number(b), 0);
}
