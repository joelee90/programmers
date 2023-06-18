function solution(num, k) {
  const arr = Array.from(num.toString());
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k.toString()) {
      return i + 1;
    }
  }
  return -1;
}

console.log(solution(29183, 1));
