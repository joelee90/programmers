// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  let x = 0;
  let n = 0;
  const arr = polynomial.split('+').map((v) => v.trim());
  arr.forEach((v) => {
    if (v.includes('x')) {
      const str = v.replace('x', '') || '1';
      x += parseInt(str, 10);
    } else {
      n += parseInt(v, 10);
    }
  });
  var answer = [];
  if (x) answer.push(`${x === 1 ? '' : x}x`);
  if (n) answer.push(n);
  return answer.join(' + ');
}

// console.log(solution('3x + 7 + x'));
console.log(solution('x + x + x'));
