function solution(new_id) {
  const result = new_id
    .toLowerCase() //1단계
    .replace(/[^\w\.\-]/g, "") //2단계
    .replace(/\.{2,}/g, ".") // 3단계
    .replace(/^\.|\.$/g, "") //4단계
    .replace(/^$/, "a") //5단계
    .slice(0, 15) //6단계
    .replace(/\.$/g, ""); //6단계에서 만일 뒤에 .이 있을 경우

  return result.padEnd(3, result[result.length - 1]);
}
