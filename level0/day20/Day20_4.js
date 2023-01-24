//다항식 더하기
function solution(p) {
  let xN = 0;
  let yN = 0;

  let xNum = p
    .split("+")
    .filter((x) => x.includes("x"))
    .map((x) => x.replace("x", "").trim());
  let yNum = p
    .split("+")
    .filter((x) => !x.includes("x"))
    .map((x) => x.trim());

  //x와 y구하기
  if (xNum !== null) xNum.map((x) => (x === "" ? xN++ : (xN += +x)));
  if (yNum !== null) yN = yNum.reduce((a, b) => a + Number(b), 0);

  if (xN === 1 && yN > 0) {
    // x 가 1, y 값 있을 때
    return "x" + " + " + yN.toString();
  } else if (xN === 1 && yN === 0) {
    // x 가 1, y 값 없을 때
    return "x";
  } else if (xN > 1 && yN > 0) {
    //x가 1이상, y 값 있을때
    return xN.toString() + "x" + " + " + yN.toString();
  } else if (xN > 1 && yN === 0) {
    //x가 1이상, y 값 없을때
    return xN.toString() + "x";
  } else if (xN === 0) {
    return yN.toString();
  }
}
