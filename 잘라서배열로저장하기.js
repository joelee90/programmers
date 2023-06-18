// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  var answer = [];
  let arr = my_str.split('');
  while (arr.length) {
    const sort = arr.splice(0, n);
    answer.push(sort.join(''));
  }
  return answer;
}

const answer = solution('abc1Addfggg4556b', 6);
console.log('answer', answer);

// while 6: push
// array에서 6만큼 뺸다, 새로운 array 에서도 동이랗게
