// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  let arr = my_string.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === arr[i]) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join('');
}

console.log(solution('abCdEfghIJ'));
