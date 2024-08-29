const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((i) => i.split(""));

let findHeart = [0, 0];
let length = [0, 0, 0, 0, 0];

for (let n = 0; n < input.length; n++) {
  if (input[n].indexOf("*") !== -1) {
    findHeart[0] = n + 1;
    findHeart[1] = input[n].indexOf("*");
    break;
  }
}

length[0] = findHeart[1] - input[findHeart[0]].indexOf("*");
length[1] = input[findHeart[0]].lastIndexOf("*") - findHeart[1];

let hipposition = [];
console.log(findHeart[0] + 1, findHeart[1] + 1);

for (let n = findHeart[0]; n < input.length; n++) {
  if (input[n][findHeart[1]] !== "*") {
    hipposition = [n, findHeart[1]];
    break;
  }
}
length[2] = hipposition[0] - findHeart[0] - 1;

for (let n = hipposition[0]; n < input.length; n++) {
  if (input[n][hipposition[1] - 1] === "*") {
    length[3]++;
  }
  if (input[n][hipposition[1] + 1] === "*") {
    length[4]++;
  }
}
console.log(...length);
