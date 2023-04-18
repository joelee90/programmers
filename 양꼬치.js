// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  var answer = 0;
  let service = 0;
  if (n < 10) service = 0;
  if (n > 9) {
    service = Math.floor(n / 10);
  }

  answer = n * 12000 + 2000 * k - 2000 * service;
  return answer;
}
console.log(solution(64, 6));

// 10인분을 먹으면 음료수 하나를 서비스
// n-양꼬치는 1인분에 12,000원, k-음료수는 2,000원
// n:10	k:3	result:124,000

// 어떤 숫자를 10으로 나눴을때, 1 이상이면 그 숫자를 Math.floor 한게 음료수 제공 수 -> discount
// 음료수 가격: (2000 * k) - (2000 * discount)
// 음식값
