// https://school.programmers.co.kr/learn/courses/30/lessons/120909

function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return 1;
  }
  return 2;
}

console.log(solution(144));
