function solution(x) {
  let indexSum = x
    .toString()
    .split("")
    .reduce((a, b) => +b + a, 0);
  return x % indexSum === 0;
}
