function solution(array, commands) {
  let result = [];
  commands.map((arr) => {
    let i = arr[0] - 1;
    let j = arr[1];
    let k = arr[2];
    result.push(array.slice(i, j).sort((a, b) => a - b)[k - 1]);
  });
  return result;
}
