function solution(dot) {
  var answer = 0;
  for (let i = 0; i < dot.length; i++) {
    if (dot[i] > 0 && dot[i + 1] > 0) {
      return 1;
    } else if (dot[i] < 0 && dot[i + 1] > 0) {
      return 2;
    } else if (dot[i] < 0 && dot[i + 1] < 0) {
      return 3;
    } else if (dot[i] > 0 && dot[i + 1] < 0) {
      return 4;
    }
  }
  return answer;
}

// console.log(solution([2, 4]));
console.log(solution([-7, 9]));

// 순회, 각 element 접근해서 음수 양수 구분
// 1-4 사분면 케이스
// 1: ++, 2: -+, 3: --, 4: +-
// anwer = [p,p]
// i, i+1
// 1: if(i > 0 && i+i > 0)
