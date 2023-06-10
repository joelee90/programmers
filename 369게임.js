// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  var answer = 0;
  for (let i = 0; i < order.length; i++) {
    if (order[i] === '3' || order[i] === '6' || order[i] === '9') {
      answer++;
    }
  }
  return answer;
}

console.log(solution(29423));
