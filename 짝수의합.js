// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  var answer = 0;
  let evenNumbers = [];
  let i = 1;
  while (i <= n) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
    i++;
  }
  let sum = 0;
  for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i];
  }
  answer = sum;
  return answer;
}

console.log(solution(10));

// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
// n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
