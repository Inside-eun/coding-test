const input = require("fs").readFileSync("input.txt").toString().trim() * 1;

if (input % 2 === 1) {
  console.log("SK");
} else {
  console.log("CY");
}
