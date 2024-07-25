const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let Country = input[0][1];
let Countries = input.slice(1);
let specificScore;
let others = [];
for (let n of Countries) {
  if (n[0] === Country) {
    specificScore = n;
  } else {
    others.push(n);
  }
}
let result = 1;
for (let n of others) {
  if (n[1] > specificScore[1]) {
    result++;
  } else if (n[1] === specificScore[1] && n[2] > specificScore[2]) {
    result++;
  } else if (
    n[1] === specificScore[1] &&
    n[2] === specificScore[2] &&
    n[3] > specificScore[3]
  ) {
    result++;
  }
}
console.log(result);
