// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  var answer = '';
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += my_string[num2];
    } else if (i === num2) {
      answer += my_string[num1];
    } else {
      answer = answer + my_string[i];
    }
  }
  return answer;
}

console.log(solution('I love you', 3, 6));
