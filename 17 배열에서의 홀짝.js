const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let a = input[1]
  .trim()
  .split(" ")
  .map((i) => i.split(" ").map(Number));
let b = input[2]
  .trim()
  .split(" ")
  .map((i) => i.split(" ").map(Number));
let result = "";

console.log(a, b);
for (let n = a.length - 1; n >= 0; n--) {
  if (a[n] % 2 === 0) {
    result += a[n];
    result += " ";
  }
}
for (let n = b.length - 1; n >= 0; n--) {
  if (b[n] % 2 === 1) {
    result += b[n];
    result += " ";
  }
}
console.log(result);
