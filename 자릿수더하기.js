function solution(n) {
  var answer = 0;
  n = Array.from(n.toString());
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }
  return answer;
}

console.log(solution(930211));
