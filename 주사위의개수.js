// https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
  var answer = 1;
  for (let i = 0; i < box.length; i++) {
    const count = Math.floor(box[i] / n);
    answer = answer * count;
  }
  return answer;
}

console.log(solution([10, 8, 6], 3));

// n이 각 가로, 세로, 높이 길이에 몇번 들어가는지 확인 후 총 곱을 구한다.

// 각 item에 3이 몇번 들어가는지
// const t = Math.floor(item % n)
// answer = answer * t
