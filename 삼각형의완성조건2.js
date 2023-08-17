// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  // 시작 부분: 큰변 - 작은변 + 1
  // 마지막 부분: 큰변 + 작은변 - 1
  let min = Math.min(...sides);
  let max = Math.max(...sides);
  let start = max - min + 1;
  let end = max + min - 1;
  let answer = end - start + 1;
  return answer;
}

// console.log(solution([1, 2]));
console.log(solution([3, 6]));
// console.log(solution([11, 7]));

// 수학으로 푸는 방식을 찾아본다.
