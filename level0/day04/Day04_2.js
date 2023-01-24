//피자 나눠 먹기 2
function solution(n) {
  let pizzaBox = 6;
  while (pizzaBox % n !== 0) {
    pizzaBox += 6;
  }
  return pizzaBox / 6;
}