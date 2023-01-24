//영어가 싫어요
function solution(numbers) {
  let result = '';
  let num = '';
  let numObject ={
      "zero": 0,
      "one": 1, 
      "two": 2, 
      "three":3, 
      "four":4, 
      "five":5, 
      "six":6, 
      "seven":7, 
      "eight":8, 
      "nine":9
  }
  for(let x = 0; x <= numbers.length; x++){
      if(numObject[num] === undefined){
          num += numbers[x]
      } else {
          result += numObject[num]
          num = numbers[x]  
      }
  }
  return +result
}