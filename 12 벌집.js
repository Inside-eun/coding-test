// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()

const input = require("fs").readFileSync("input.txt").toString().trim() * 1;

let num = 1;
let block = 1;

while (input > num) {
  num += 6 * block;
  block++;
}

console.log(block);
