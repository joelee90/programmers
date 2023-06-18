// https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }
  return answer;
}

const answer = solution([1, 1, 2, 3, 4, 5], 1);
console.log('answer', answer);
