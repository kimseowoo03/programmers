function solution(numbers) {
  let result = 0;
  for (let num = 0; num < 10; num++) {
    if (!numbers.includes(num)) result += num;
  }
  return result;
}
