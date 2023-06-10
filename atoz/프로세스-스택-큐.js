// 스택/큐 - 연결 리스트를 이용

function solution(priorities, location) {
  let answer = 0;
  let list = priorities.map((v, i) => ({ v, i }));
  while (true) {
    let current = list.shift();
    if (list.some((i) => i.v > current.v)) {
      list.push(current);
    } else {
      answer++;
      if (current.i === location) {
        return answer;
      }
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
