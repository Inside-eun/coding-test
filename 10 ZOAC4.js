let fs = require("fs");
// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .map((el) => el * 1);
let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((el) => el * 1);

// 1. 전체 길이가 W인 배열 안에, 각각의 길이가 H인 이중배열을 만든다
// 2. 모든 배열 값을 0으로 두고
// 3. 1,1 번째 칸에 사람을 넣고, N 칸 뒤의 사람을 넣고 하는 식으로 하고
// 4. 넣을때마다 카운트

let arr = new Array(input[0]).fill(0).map((_) => new Array(input[1]).fill(0));

let result = 1;
arr[0][0] = 1;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i > input[2] && arr[i - input[2] - 1][j] === 1) {
      arr[i][j] = 1;
      result++;
    } else if (j > input[3] && arr[i][j - input[3] - 1] === 1) {
      arr[i][j] = 1;
      result++;
    }
  }
}

console.log(result);

//메모리 초과
//수학적으로 해결 ㄱ
//1. 빈칸까지 합쳐서 한 개라고 생각하면 한 명의 사람이 차지하는 공간은 (input[2]+1)*(input[3+1]);
//2. 즉, 가로에 최대 들어가는 사람을 나눈 몫과
//3. 세로에 들어가는 몫의 곱

let num =
  Math.ceil(input[1] / (input[3] + 1)) * Math.ceil(input[0] / (input[2] + 1));
console.log(num);
