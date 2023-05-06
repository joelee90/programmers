// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  let cnt = 1;
  for (let i = 0; ; i += 2) {
    i = i % numbers.length;
    if (cnt === k) {
      return numbers[i];
    }
    cnt += 1;
  }
}

console.log(solution([1, 2, 3, 4], 3));

// 배열의 길이를 넘어선 index를 구하기 위해선,
// i % array.length: 나머지 수가 다음 순서가 됨
