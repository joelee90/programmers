// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      arr.push(i);
      n = n / i;
    }
  }
  const uniqueArray = new Set(arr);
  return Array.from(uniqueArray);
}

console.log(solution(12));
