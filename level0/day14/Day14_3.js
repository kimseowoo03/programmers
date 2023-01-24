//암호 해독
function solution(cipher, code) {
  let result = ""
  for(let i = code-1; i < cipher.length; i +=code){
      result += cipher[i]
  }
  return result;
}