// https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n, numlist) {
  var answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % 3 === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
