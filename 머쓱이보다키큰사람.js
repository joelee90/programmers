// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}

const answer = solution([149, 180, 192, 170], 167);
console.log('answer', answer);
