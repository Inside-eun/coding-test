// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(0, -1)
//   .map((i) => i.split(" ").map(Number));

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((i) => i.split(" ").map(Number));

let result = [];

//하나하나 돌지 말고 주어진 배열에서 자기 앞에 큰 애들의 수를 구하면 된다

for (let n of input) {
  let count = 0;
  n = n.slice(1);
  let line = [];
  for (let m of n) {
    line.forEach((el) => (el > m ? count++ : null));
    line.push(m);
  }
  result.push(count);
}

result.forEach((el, idx) => console.log(idx + 1, "", el));
