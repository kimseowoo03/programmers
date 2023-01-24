//피자 나눠 먹기 3
function solution(slice, n) {
  let pizzaPiece = slice;

  while (pizzaPiece < n) {
    pizzaPiece += slice;
  }
  return pizzaPiece / slice;
}