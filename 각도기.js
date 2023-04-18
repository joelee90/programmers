// https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {
  var answer = 0;
  if (angle < 90) {
    answer = 1;
  } else if (angle === 90) {
    answer = 2;
  } else if (angle > 90 && angle < 180) {
    answer = 3;
  } else if (angle === 180) {
    answer = 4;
  }
  return answer;
}

// 예각-1, 직각-2, 둔각-3, 평각-4
