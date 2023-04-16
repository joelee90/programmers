// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  var answer = [];
  answer = [Math.floor(money / 5500), money % 5500];
  return answer;
}
