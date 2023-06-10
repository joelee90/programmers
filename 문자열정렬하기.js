// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  return my_string
    .split('')
    .filter((v) => v.match(/\d+/))
    .map((v) => Number(v))
    .sort();
}

console.log(solution('p2o4i8gj2'));
