//합성수 찾기
function solution(n) {
  let arr = new Set();

  for (let i = 1; i <= n; i++) {
    //합성수: 1과 본인(i) 제외하고 떨어지는 거 찾기
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        arr.add(i);
      }
    }
  }
  return arr.size;
}