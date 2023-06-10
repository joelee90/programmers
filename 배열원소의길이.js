// https://school.programmers.co.kr/learn/courses/30/lessons/120854

function solution(strlist) {
  // 순회, 각 item length,
  const arr = [];
  for (let i = 0; i < strlist.length; i++) {
    arr.push(strlist[i].length);
  }
  return arr;
}

// console.log(solution(['We', 'are', 'the', 'world!']));
console.log(solution(['I', 'Love', 'Programmers.']));
