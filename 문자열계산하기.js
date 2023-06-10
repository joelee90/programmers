// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  var answer = 0;
  let add = my_string.indexOf('+');
  let num = my_string.match(/\d+/g).map((n) => Number(n));
  if (add > -1) {
    answer = num.reduce((a, b) => a + b);
  } else {
    answer = num.reduce((a, b) => a - b);
  }
  return answer;
}

solution('3 - 4');
