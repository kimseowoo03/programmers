function solution(n) {
  let result = 0;
  for (let num = 1; num <= n; num++) {
    if (n % num === 0) result += num;
  }
  return result;
}
