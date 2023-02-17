function solution(arr) {
  if (arr.length === 1) return [-1];

  let minNumIndex = arr.indexOf(Math.min(...arr));

  arr.splice(minNumIndex, 1);
  return arr;
}
