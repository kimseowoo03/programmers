//OX퀴즈
function solution(quiz) {
    return quiz.map(x => {
      const [evaluation, answer] = x.split(" = ");
        return eval(evaluation) === +answer ?'O':'X'
    })
}