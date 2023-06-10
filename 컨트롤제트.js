// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  s = s.split(' ');
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'Z') {
      arr.pop();
      continue;
    }
    arr.push(s[i]);
  }
  return (sum = arr.reduce((a, c) => a + Number(c), 0));
}

console.log(solution('1 2 Z 3'));
