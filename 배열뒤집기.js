// https://school.programmers.co.kr/learn/courses/30/lessons/120821

// function solution(num_list) {
//   return num_list.reverse();
// }

function solution(num_list) {
  //loop, 뒤에서 부터
  let answer = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    console.log(num_list[i]);
    answer.push(num_list[i]);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
