// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  var answer = '';
  let myFunc = (num) => Number(num);
  let intArr = Array.from(String(age), myFunc).reverse();
  console.log('intArr', intArr);

  let string = 'abcdefghijk'.split('');
  console.log('string', string);

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < intArr.length; j++) {
      if (intArr[j] === i) {
        answer += string[i];
        // console.log('string[i]', string[i]);
      }
    }
  }
  return answer;
}

// abcdefghijk
// 23	"cd"
// lmnopqrstuvwxyz

const t = solution(23);
const t2 = solution(51);
const t3 = solution(100);
console.log('t2', t2);
console.log('t3', t3);
