function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i].split(' ');
    const cal = question[1];
    const first = Number(question[0]);
    const second = Number(question[2]);
    const ans = Number(question[4]);
    if (cal === '-') {
      if (first - second === ans) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    } else {
      if (first + second === ans) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    }
  }
  return answer;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
