// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  const regex = /[aeiouAEIOU]/g;
  return my_string.replace(regex, '');
}
console.log(solution('nice to meet you'));
