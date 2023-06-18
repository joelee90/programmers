// https://school.programmers.co.kr/learn/courses/30/lessons/120910

function solution(n, t) {
  var answer = n;
  for (let i = 1; i < t + 1; i++) {
    answer = answer * 2;
  }
  return answer;
}

// console.log(solution(2, 10));
console.log(solution(7, 15));
