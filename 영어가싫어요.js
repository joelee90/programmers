// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  let ans = [];
  let str = '';
  let arr = numbers.split('');
  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i];
    switch (str) {
      case 'one':
        ans.push(1);
        str = '';
        break;
      case 'two':
        ans.push(2);
        str = '';
        break;
      case 'three':
        ans.push(3);
        str = '';
        break;
      case 'four':
        ans.push(4);
        str = '';
        break;
      case 'five':
        ans.push(5);
        str = '';
        break;
      case 'six':
        ans.push(6);
        str = '';
        break;
      case 'seven':
        ans.push(7);
        str = '';
        break;
      case 'eight':
        ans.push(8);
        str = '';
        break;
      case 'nine':
        ans.push(9);
        str = '';
        break;
      case 'zero':
        ans.push(0);
        str = '';
        break;
      default:
        break;
    }
  }
  console.log('ans', ans);
  //   return ans.join('');
}

// console.log(solution('onetwothreefourfivesixseveneightnine'));
console.log(solution('onefourzerosixseven'));

// split, 하나씩 더해서 one 이 되는지, 도면 담기
