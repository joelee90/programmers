// https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string) {
  var answer = '';
  let array = [];
  const string = my_string.split('');

  let cnt = string.length - 1;
  while (cnt >= 0) {
    array.push(string[cnt]);
    cnt = cnt - 1;
  }
  answer = array.join('');
  return answer;
}
