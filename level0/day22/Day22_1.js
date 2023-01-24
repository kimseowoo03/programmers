//저주의 숫자 3
function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count++;
    while (count % 3 === 0 || String(count).includes("3")) count++;
  }
  return count;
}