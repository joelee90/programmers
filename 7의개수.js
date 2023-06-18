// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  var answer = 0;
  const noComma = array.toString().replace(/,/g, '');
  const arr = noComma.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '7') {
      answer++;
    }
  }
  return answer;
}

const answer = solution([7, 77, 17]);
console.log('answer', answer);
