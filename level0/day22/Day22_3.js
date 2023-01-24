//겹치는 선분의 길이
function solution(lines) {
  let startLastLength = [];
  let overlap = [];
  let result = [];
  let count = 0;

  //각 시작과 끝 범위 배열
  for(let i = 0; i < lines.length; i++){
      let arrLength = [];
      for(let j = lines[i][0]; j<= lines[i][1]; j++){
          arrLength.push(j)
      }
      startLastLength.push(arrLength)
  }

  // 중복되는 거 찾기
  for(let i = 0; i < startLastLength.length; i++){
     for(let j = i+1; j<startLastLength.length; j++){
         let arrLength = [];
         startLastLength[i].map(x => startLastLength[j].includes(x) &&arrLength.push(x))
         if(arrLength.length !== 0 && arrLength.length !== 1) overlap.push(arrLength)
     }
  }
  //중복이 없을 떄
  if(overlap.length === 0) return 0

  //중복이 있으나 길이가 한개씩(원소 두개)일 때는 배열 자체로 넣기
  overlap.map(x => x.length === 2 ? result.push(x) : result.push(...x))

  result = [...new Set(result)].sort()
  return result.length < 3 ?result.length:result.length-1
}