// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  var answer = 0;
  const str = my_string.replaceAll(/[a-zA-Z]/gi, ' ').split(' ');
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) answer += Number(str[i]);
  }
  return answer;
}

console.log(solution('aAb1B2cC34oOp'));
