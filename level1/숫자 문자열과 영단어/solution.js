function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numbers.length; i++) {
    console.log(s.split(numbers[i]));
    s = s.split(numbers[i]).join(i);
  }

  return Number(s);
}
