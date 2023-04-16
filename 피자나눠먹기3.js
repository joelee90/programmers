// https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution(slice, n) {
  var answer = 1;
  while (true) {
    if (answer * slice >= n) {
      break;
    }
    answer++;
  }
  return answer;
}

function solution(slice, n) {
  return Math.ceil(n / slice);
}
