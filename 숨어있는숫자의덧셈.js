// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
  const num = my_string.replace(/[a-zA-Z]/g, '');
  return num
    .split('')
    .map((v) => Number(v))
    .reduce((a, c) => a + c, 0);
}

console.log(solution('aAb1B2cC34oOp'));
