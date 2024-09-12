// const input = require("fs")
//   .readFileSync("input.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((i) => i.trim().split(" ").map(Number));

// let bridgeRoad = new Array(input[0][0]).fill(0);
// let result = 0;

// while (bridgeRoad.includes(0)) {
//   result++;
//   for (let n of input[2]) {
//     // console.log(n, result, bridgeRoad);
//     if (n - result >= 0) {
//       // 인덱스가 0 이상일 때만
//       bridgeRoad[n - result] = 1;
//     }
//     if (n + result - 1 < bridgeRoad.length && result > 0) {
//       // 인덱스가 배열 길이보다 작을 때만
//       bridgeRoad[n + result - 1] = 1;
//     }
//   }
// }
// console.log(result);

//시간초과1

// const input = require("fs")
//   .readFileSync("input.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((i) => i.trim().split(" ").map(Number));

// let bridgeLength = input[0][0];
// let bridgeRoad = new Array(bridgeLength).fill(0);
// let zeroCount = bridgeLength; // 0의 개수를 추적
// let result = 0;

// while (zeroCount > 0) {
//   result++;
//   for (let n of input[2]) {
//     // 왼쪽으로 확장
//     if (n - result >= 0 && bridgeRoad[n - result] === 0) {
//       bridgeRoad[n - result] = 1;
//       zeroCount--;
//     }
//     // 오른쪽으로 확장
//     if (n + result - 1 < bridgeLength && bridgeRoad[n + result - 1] === 0) {
//       bridgeRoad[n + result - 1] = 1;
//       zeroCount--;
//     }
//   }
// }

// console.log(result);

//시간초과 2

//수학적 계산.

//거리를 둔 걸 순환,
//맨 처음 칸부터 첫 위치까지 저장
//두번째까지 값의 /2 한 것과 크기 비교
//맨 마지막 칸과 마지막 위치 비교
//제일 큰 값 출력

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim().split(" ").map(Number));

let maxNum = input[2][0];

for (let n = 0; n < input[2].length; n++) {
  if (
    n !== input[1] - 1 &&
    Math.ceil((input[2][n + 1] - input[2][n]) / 2) > maxNum
  ) {
    maxNum = Math.ceil((input[2][n + 1] - input[2][n]) / 2);
  } else if (n === input[1] - 1 && input[0] - input[2][n] > maxNum) {
    maxNum = input[0] - input[2][n];
  }
}
console.log(maxNum);
