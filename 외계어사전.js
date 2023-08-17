// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  var answer = 2;
  for (let i = 0; i < dic.length; i++) {
    let count = 0;
    for (let j = 0; j < spell.length; j++) {
      if (dic[i].includes(spell[j])) {
        count++;
      }
    }
    if (count === spell.length) {
      answer = 1;
    }
  }
  return answer;
}

const result = solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']);
// const result = solution(
//   ['p', 'o', 's'],
//   ['sod', 'eocd', 'qixm', 'adio', 'soo']
// );

// dic 가 spell을 포함한다면 count++
// count의 수가 spell length 와 같다면 return 1, else 2
