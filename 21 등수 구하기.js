const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let biggerScore = 0;
let sameScore = 0;
if (input[0][0] !== 0) {
  for (let n of input[1]) {
    if (n > input[0][1]) {
      biggerScore++;
    } else if (n === input[0][1]) {
      sameScore++;
    }
  }
}

if (input[0][2] > biggerScore + sameScore) {
  console.log(biggerScore + 1);
} else {
  console.log(-1);
}
