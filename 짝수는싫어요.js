// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  var answer = [];
  for (let i = 0; i < n + 1; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}
