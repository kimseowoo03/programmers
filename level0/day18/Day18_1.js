//문자열안에 문자열
function solution(str1, str2) {
    return str1.replace(str2,'') !== str1 ?1:2
}