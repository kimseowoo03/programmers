//옹알이 (1)
function solution(babbling) {
  return babbling.filter((x) => !x.replace(/aya|ye|woo|ma/g, "")).length;
}