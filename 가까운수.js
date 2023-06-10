// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  let answer = 0;
  let min = 99999999;
  const sorted = array.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    const item = sorted[i];

    if (min > Math.abs(n - item)) {
      min = Math.abs(n - item);
      answer = item;
    }
  }
  return answer;
  //   let diff = [];
  //   for (let i = 0; i < array.length; i++) {
  //     diff.push(Math.abs(n - array[i]));
  //   }
  //   let res = array[diff.indexOf(Math.min(...diff))];
  //   console.log('res', res);
}

console.log(solution([21, 21, 28], 20));

// 가장 가까운 수는 뺄샘이 적은 수
