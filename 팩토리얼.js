// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function getFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}

function solution(n) {
  for (let i = 1; ; i++) {
    const result = getFactorial(i);
    if (n < result) {
      return i - 1;
    }
  }
}

// 팩토리얼을 구하는 함수를 만든다.
// 1부터 시작해서 팩토리얼을 구하면서 n 보다 작은 경우 i보다 1작은 수를 return

console.log(solution(7));
