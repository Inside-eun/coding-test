const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim().split(" ").map(Number));

let Switch = [...input[1]];
let actions = input.slice(3);

console.log(actions);

// for (let n = 3; n < input.length; n++) {
//   if (input[n][0] === 1) {
//     for (let m = input[n][1]; m < input[0][0]; ) {
//       Switch[m - 1] = Switch[m - 1] === 1 ? 0 : 1;
//       m += m;
//     }
//   } else if (input[n][0] === 2) {
//     let Number = input[n][1] - 1;
//     for (let m = 1; m < input[0][0]; m++) {
//       if (Switch[Number - m] === Switch[Number + m]) {
//         Switch[Number - m] = Switch[Number - m] === 1 ? 0 : 1;
//         Switch[Number + m] = Switch[Number + m] === 1 ? 0 : 1;
//       } else {
//         break;
//       }
//     }
//     Switch[Number] = Switch[Number] === 1 ? 0 : 1;
//   }
// }
function men(number, switchs) {
  for (let i = 0; i < switchs.length; i++) {
    if ((i + 1) % number === 0) {
      switchs[i] = switchs[i] === 0 ? 1 : 0;
    }
  }
}
function women(number, switchs) {
  const range = Math.max(number - 1, switchs.length - number);
  switchs[number - 1] = switchs[number - 1] === 0 ? 1 : 0;
  for (let i = 1; i <= range; i++) {
    if (switchs[number - 1 - i] != switchs[number - 1 + i]) break;
    switchs[number - 1 - i] = switchs[number - 1 - i] === 0 ? 1 : 0;
    switchs[number - 1 + i] = switchs[number - 1 + i] === 0 ? 1 : 0;
  }
}

actions.forEach(([type, number]) => {
  if (type === 1) men(number, Switch);
  else if (type === 2) women(number, Switch);
});

let result = [];
while (Switch.length > 0) {
  result.push(Switch.splice(0, 20).join(" "));
}
console.log(result.join("\n"));

//왜안됨...
