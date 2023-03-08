function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers.map((num) => {
      numbers.indexOf(num) == i || result.push(num + numbers[i]);
    });
  }
  return [...new Set(result)].sort((a, b) => a - b);
}
