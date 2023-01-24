//개미 군단
function solution(hp) {
  let ants = 0;
  while (hp >= 5) {
    hp -= 5;
    ants++;
  }
  while (hp >= 3) {
    hp -= 3;
    ants++;
  }
  while (hp >= 1) {
    hp -= 1;
    ants++;
  }
  return ants;
}