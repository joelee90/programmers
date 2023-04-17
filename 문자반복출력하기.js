// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  var answer = '';
  const arr = my_string.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= n; j++) {
      answer += arr[i];
    }
  }
  return answer;
}

console.log(solution('hello', 3));
