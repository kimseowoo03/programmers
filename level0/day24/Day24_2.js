//이진수 더하기
function solution(bin1, bin2) {
  let result = [];
  let sum = String(+bin1 + +bin2)
    .split("")
    .map((x) => +x);

  for (let i = sum.length - 1; i >= 0; i--) {
    if (sum[i] > 1) {
      result.push(sum[i] % 2);
      sum[i - 1] === undefined ? result.push(1) : sum[i - 1]++;
    } else {
      result.push(sum[i]);
    }
  }
  return result.reverse().join("");
}