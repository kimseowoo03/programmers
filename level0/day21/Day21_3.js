//삼각형의 완성조건 (2)
function solution(sides) {
  let count = 0;
  let sidesSort = sides.sort((a, b) => b - a);

  //가장 긴 변이 sides에 있는 maxNum 일 때
  for (let n = 1; n <= sidesSort[0]; n++) {
    if (sidesSort[1] + n > sidesSort[0]) {
      count++;
    }
  }
  //가장 긴 변이 나머지 변인 경우 (경우의 수가 1이상)
  if (count > 1) count += sidesSort[0] + sidesSort[1] - 1 - sidesSort[0];
  return count;
}