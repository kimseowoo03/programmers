//직사각형 넓이 구하기
function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  const y = Math.abs(dots[0][1] - dots[1][1]);
  const x = Math.abs(dots[0][0] - dots[2][0]);
  return x * y;
}