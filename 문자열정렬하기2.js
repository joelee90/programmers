// https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string) {
  var answer = my_string.toLowerCase().split('').sort().join('');
  //   my_string.split('').sort().join('');
  return answer;
}

// 소문자
// 순서 sort

const answer = solution('heLLo');
console.log('answer:', answer);
