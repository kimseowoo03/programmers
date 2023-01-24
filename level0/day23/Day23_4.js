//로그인 성공?
function solution(id_pw, db) {
  for (let i of db) {
    if (i[0] === id_pw[0]) {
      return id_pw[1] === i[1] ? "login" : "wrong pw";
    }
  }
  return "fail";
}