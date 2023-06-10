// https://school.programmers.co.kr/learn/courses/30/lessons/120896

const obj = {};

function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      arr.push(key);
    }
  }

  return arr.sort().join('');
}

console.log(solution('hello'));

// 1번등장 찾아서 반환, 사전순으로 정렬, 각 몇번 등장하는지 count 하기 위해 obj
