function solution(cipher, code) {
  var answer = '';
  const arr = cipher.split('');
  let next = code - 1;
  for (let i = next; i < arr.length; i += code) {
    answer = answer + cipher[i];
  }
  return answer;
}

// console.log(solution('dfjardstddetckdaccccdegk', 4));
console.log(solution('pfqallllabwaoclk', 2));
