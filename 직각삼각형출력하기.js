// https://school.programmers.co.kr/learn/courses/30/lessons/120823

let line = 1;
while (line <= 3) {
  let star = '';
  let cnt = 0;
  while (cnt < line) {
    star = star + '*';
    cnt = cnt + 1;
  }
  line = line + 1;
}

let x = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    x = x + '*';
  }
  x = x + '\n';
}

console.log(x);
