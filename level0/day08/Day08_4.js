//순서쌍의 개수
function solution(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result.length;
}