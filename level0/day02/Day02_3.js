//분수의 덧셈
function solution(denum1, num1, denum2, num2) {
  let num = num1*num2;
  let denum = (denum1*num2) + (denum2*num1)
  let maxnum = 1

  for(let i = 1; i <= denum; i++){
      if(denum%i === 0 && num%i === 0){
          maxnum = i
      }
  }

  return [denum/maxnum, num/maxnum];
}