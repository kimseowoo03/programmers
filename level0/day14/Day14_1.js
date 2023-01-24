//가까운 수
function solution(array, n) {
  return array.filter(x => Math.abs(x-n) === Math.min(...array.map(a => Math.abs(a-n)))).sort((a,b)=> a-b)[0]
}