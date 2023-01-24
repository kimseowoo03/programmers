//옷가게 할인 받기
function solution(price) {
  if (100000 <= price && price < 300000) {
    console.log("10만원 이상");
    price -= price * (5 / 100);
  } else if (300000 <= price && price < 500000) {
    console.log("30만원 이상");
    price -= price * (10 / 100);
  } else if (500000 <= price) {
    console.log("50만원 이상");
    price -= price * (20 / 100);
  }
  return Math.floor(price);
}