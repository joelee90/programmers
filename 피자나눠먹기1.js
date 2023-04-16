// https://school.programmers.co.kr/learn/courses/30/lessons/120814

function solution(n) {
  var answer = 0;
  if (n <= 7) return 1;
  if (n > 7) {
    answer = Math.ceil(n / 7);
  }
  return answer;
}

console.log(solution(15));
