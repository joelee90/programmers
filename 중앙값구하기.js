// Bubble sort Implementation using Javascript
const array = [11, 12, 3, 2, 1];

function solution(array) {
  for (let i = 0; i < array.length; i++) {
    let swap;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
    if (!swap) {
      break;
    }
  }
  const pos = Math.floor(array.length / 2);
  return array[pos];
}

console.log(solution(array));
