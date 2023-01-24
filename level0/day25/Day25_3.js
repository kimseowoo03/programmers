//연속된 수의 합
function solution(num, total) {
  let min = Math.ceil(total/num - Math.floor(num/2));
  return new Array(num).fill(0).map((el,i)=>i+min);
}