// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers[0] * numbers[1];
}

// console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 24, 10, 1, 9, 31]));

// 내림차순으로 정렬한뒤, 0 * 1
