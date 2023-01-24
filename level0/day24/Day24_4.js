//k의 개수
function solution(i, j, k) {
  let count = 0;
  for(let num = i; num <= j; num++){
      String(num).split('').map(x => x == k && count++)
  }
  return count
}