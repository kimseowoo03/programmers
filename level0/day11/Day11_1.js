//주사위의 개수
function solution(box, n) {
  let [l, w, h] = box;
  return Math.floor(l / n) * Math.floor(w / n) * Math.floor(h / n);
}