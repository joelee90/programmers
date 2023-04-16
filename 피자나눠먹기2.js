// https://school.programmers.co.kr/learn/courses/30/lessons/120815

// function solution(n) {
//   let answer = 1;
//   while ((answer * 6) % n !== 0) {
//     answer++;
//   }
//   return answer;
// }

// solution(4);

const solution = (n) => {
  let piece = 6;
  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece = piece + 6;
  }
  return piece / 6;
};

console.log(solution(12));
