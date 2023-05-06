// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count >= 3) {
      answer.push(i);
    }
  }
  return answer.length;
}

// 합성수: 1보다 큰 자연수 중 소수가 아님
// 약수가 3개 이상
// 1은 소수도 합성수도 아님

console.log(solution(10));

// 4 / 1
// 4 / 2
// 4 / 3
// 4 / 4
// 자기자신은 1부터 자기 자신까지 나눠 나머지가 0의 카운트가 3개 또는 이상시
