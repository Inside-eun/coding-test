// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .map((el) => el * 1);
// let input = require("fs")
//   .readFileSync("input.txt")
//   .toString()
//   .split("\n")
//   .map((el) => el.split(" ").map(Number));

// let arr = input.map((el) => el.sort((a, b) => b - a, 0));
// arr.pop();
// for (let n of arr) {
//   if (n[0] >= n[1] + n[2]) {
//     console.log("Invalid");
//   } else if (n[0] === n[1] && n[1] === n[2]) {
//     console.log("Equilateral");
//   } else if (n[0] === n[1] || n[1] === n[2] || n[0] === n[2]) {
//     console.log("Isosceles");
//   } else {
//     console.log("Scalene");
//   }
// }

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map((i) => i.split(" ").map(Number));
//pop과 trim이 필요

let arr = input.map((el) => el.sort((a, b) => b - a, 0));
let result = [];
for (let n of arr) {
  if (n[0] >= n[1] + n[2]) {
    result.push("Invalid");
  } else if (n[0] === n[1] && n[1] === n[2]) {
    result.push("Equilateral");
  } else if (n[0] === n[1] || n[1] === n[2] || n[0] === n[2]) {
    result.push("Isosceles");
  } else {
    result.push("Scalene");
  }
}

console.log(result.join("\n"));
