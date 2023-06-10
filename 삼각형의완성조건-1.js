// https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
  let sorted = sides.sort((a, b) => b - a);
  return sorted[0] < sorted[1] + sorted[2] ? 1 : 2;
}

// console.log(solution([1, 2, 3]));
console.log(solution([199, 72, 222]));
