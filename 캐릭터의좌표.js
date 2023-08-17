// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  const boardX = Math.floor(board[0] / 2);
  const boardY = Math.floor(board[1] / 2);
  for (let i = 0; i < keyinput.length; i++) {
    const direction = keyinput[i];
    if (direction === 'left' && x > -boardX) {
      x--;
    }
    if (direction === 'right' && x < boardX) {
      x++;
    }
    if (direction === 'up' && y < boardY) {
      y++;
    }
    if (direction === 'down' && y > -boardY) {
      y--;
    }
  }
  return [x, y];
}

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]));
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));
