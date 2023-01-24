//안전지대
function solution(board) {
  let safeZone = 0;
  let danjer = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      if (board[i][k] === 1) {
        //지뢰를 발견한 경우, 그 주변을 위험 지대로 바꿔야 한다.
        danjer.forEach((item) => {
          let [xNum, yNum] = item;
          //위험지대인 좌표 계산
          [xNum, yNum] = [i + xNum, k + yNum];
          if (
            xNum >= 0 &&
            yNum >= 0 &&
            xNum < board.length &&
            yNum < board[i].length &&
            board[xNum][yNum] === 0
          ) {
            board[xNum][yNum] = 2;
          }
        });
      }
    }
  }

  board.forEach((x) => x.forEach((y) => (y === 0 ? safeZone++ : null)));
  return safeZone;
}