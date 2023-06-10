// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
  let uniq = '';
  for (let i = 0; i < my_string.length; i++) {
    if (uniq.indexOf(my_string[i]) === -1) {
      uniq += my_string[i];
    }
  }
  return uniq;
}

console.log(solution('people'));
