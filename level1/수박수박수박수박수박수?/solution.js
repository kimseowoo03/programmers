function solution(n) {
  let result = [];
  for (let num = 1; num <= n; num++) {
    result.push(num % 2 === 0 ? "박" : "수");
  }
  return result.join("");
}
