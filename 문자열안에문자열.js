// https://school.programmers.co.kr/learn/courses/30/lessons/120908

function solution(str1, str2) {
  return str1.indexOf(str2) > -1 ? 1 : 2;
}

// 있다면 1을 없다면 2
console.log(solution('ppprrrogrammers', 'pppp'));
