//가위 바위 보
function solution(rsp) {
    let arr = {
        '2':'0',
        '0':'5',
        '5':'2'
    }
    return rsp.split('').map(x => arr[x]).join('')
}