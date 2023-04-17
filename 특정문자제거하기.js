// https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string, letter) {
  var answer = '';
  const str = my_string.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== letter) {
      answer += str[i];
    }
  }
  return answer;
}

// console.log(solution('abcdef', 'f'));
console.log(solution('BCBdbe', 'B'));
