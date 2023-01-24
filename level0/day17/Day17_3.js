//자릿수 더하기
function solution(n) {
    return n.toString().split('').reduce((a,b) => a + Number(b), 0)
}