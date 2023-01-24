//특이한 정렬
function solution(numlist, n) {
  return numlist.sort((a,b)=> {
      const [aNum, bNum]=[Math.abs(a-n), Math.abs(b-n)]
      if(aNum === bNum) return b-a
      return aNum-bNum
  })
}