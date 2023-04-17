// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  var answer = [];
  let even = 0;
  let odd = 0;
  for (let i = 0; i < num_list.length; i++) {
    console.log(num_list[i]);
    if (num_list[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    answer = [even, odd];
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
