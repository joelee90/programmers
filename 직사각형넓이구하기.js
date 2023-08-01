// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  const x = [];
  const y = [];
  for (let i = 0; i < dots.length; i++) {
    x.push(dots[i][0]);
    y.push(dots[i][1]);
  }
  const 가로 = Math.max(...x) - Math.min(...x);
  const 새로 = Math.max(...y) - Math.min(...y);
  return 가로 * 새로;
}

console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
