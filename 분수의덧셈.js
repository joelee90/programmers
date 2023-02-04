// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  // 분모
  const denom = denom1 * denom2;
  // 분자의 합
  const num = numer1 * denom2 + numer2 * denom1;
  let min;
  min = denom < num ? denom : num;

  while (true) {
    if (denom % min === 0) {
      if (num % min === 0) {
        return [num / min, denom / min];
      }
    }
    min = min - 1;
  }

  return answer;
}
