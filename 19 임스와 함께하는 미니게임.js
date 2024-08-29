const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const typeOfGame = input[0].charAt(input[0].length - 1).trim();
const people = [...new Set(input)];

let peopleNum = people.length - 1;

if (typeOfGame === "Y") {
  console.log(peopleNum);
} else if (typeOfGame === "F") {
  console.log(Math.floor(peopleNum / 2));
} else {
  console.log(Math.floor(peopleNum / 3));
}
