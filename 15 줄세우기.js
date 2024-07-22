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

// for (let n of input) {
//   let count = 0;
//   let line = [];
//   n = n.slice(1);
//   for(let m of n){
//     line.map((el, idx) => el>m ? count += (line.length-idx) : null)
//   }
// }

let line = [3];
let n = [1, 2, 4];
let count = 0;
for (let m of n) {
  let big = 0;
  line.map((el, idx) => (el > m ? console.log(m) : null));
}
// console.log(count);
