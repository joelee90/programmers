// https://school.programmers.co.kr/learn/courses/30/lessons/120840

// function solution(balls, share) {
//   let answer = factorial(balls) / (factorial(balls - share) * factorial(share));
//   return Math.round(answer);
// }

// function factorial(n) {
//   if (n < 0) {
//     return -1;
//   }
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// while factorial recursion
// 줄어든다
function factorial(n) {
  let answer = 1;
  while (n > 1) {
    answer = answer * n;
    n--;
  }
  return answer;
}

console.log(factorial(5));
