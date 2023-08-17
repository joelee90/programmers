// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  var answer = 0;
  if (numbers.length === 2) return numbers[0] * numbers[1];
  for (let i = 0; i < numbers.length - 1; i++) {
    const x = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const y = numbers[j];
      if (x * y > answer) {
        answer = x * y;
      }
    }
  }
  return answer;
}

// console.log(solution([1, 2, -3, 4, -5]));
// console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
