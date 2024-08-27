const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const letters = ["a", "e", "i", "o", "u"];

for (let n = 0; n < input.length - 1; n++) {
  let first = false;
  let second = true;
  let third = true;
  for (let m = 0; m < input[n].length; m++) {
    if (letters.indexOf(input[n][m]) !== -1) {
      first = true;
      if (
        letters.indexOf(input[n][m - 1]) !== -1 &&
        letters.indexOf(input[n][m - 2]) !== -1 &&
        m > 1
      ) {
        second = false;
      }
    } else if (
      letters.indexOf(input[n][m - 1]) === -1 &&
      letters.indexOf(input[n][m - 2]) === -1 &&
      m > 1
    ) {
      second = false;
    }
    if (input[n][m] !== "e" && input[n][m] !== "o") {
      if (input[n][m - 1] === input[n][m]) {
        third = false;
      }
    }
  }
  if (first && second && third) {
    console.log(`<${input[n]}> is acceptable.`);
  } else {
    console.log(`<${input[n]}> is not acceptable.`);
  }
}
