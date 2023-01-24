//외계어 사전
function solution(spell, dic) {
  let sortSpell = spell.sort().join("");
  let answer = 2;
  dic.forEach((i) => {
    if (sortSpell === i.split("").sort().join("")) return (answer = 1);
  });
  return answer;
}