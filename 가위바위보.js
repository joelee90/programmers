// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  var answer = '';
  const arr = rsp.split('');
  const play = {
    2: '0',
    0: '5',
    5: '2',
  };
  for (let i = 0; i < arr.length; i++) {
    console.log('play[arr[i]', play);
    console.log('play[arr[i]', arr[i]);

    answer += play[arr[i]];
  }
  return answer;
}

const res = solution('205');
console.log('res', res);

// 가위: 2 바위: 0 보: 5
// 2 -> 0

// 2 -> 0
// 0 -> 5
// 5 -> 2
