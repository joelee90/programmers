// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  if (direction === 'right') {
    const firstItem = numbers.pop();
    numbers.unshift(firstItem);
  } else {
    const lastItem = numbers.shift();
    numbers.push(lastItem);
  }
  return number;
}

// console.log(solution([1, 2, 3], 'right'));
// console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'));
