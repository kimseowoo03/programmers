//직각삼각형 출력하기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let answer = "";
  for (let i = 1; i <= Number(input[0]); i++) {
    for (let j = 1; j <= i; j++) {
      answer += "*";
    }
    answer += "\n";
  }
  console.log(answer);
});