//다음에 올 숫자
function solution(common) {
  if (common[0] - common[1] === common[1] - common[2]) {
    //등차수열
    return common[common.length - 1] + (common[1] - common[0]);
  }
  //등비수열
  return common[common.length - 1] * (common[1] / common[0]);
}