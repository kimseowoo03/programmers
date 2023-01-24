//등수 매기기
function solution(score) {
  let averageArr = score.map(arr => (arr[0]+arr[1])/2)
  let averageSortArr = score.map(arr => (arr[0]+arr[1])/2).sort((a,b)=>b-a)
  return averageArr.map(x=> averageSortArr.indexOf(x)+1)
}