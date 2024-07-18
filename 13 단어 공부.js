// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()

const input = require("fs").readFileSync("input.txt").toString().trim();
// 알파벳 배열 생성
const alphabets = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
// 초기 값이 0인 객체 생성
const alphabetObject = alphabets.reduce((obj, letter) => {
  obj[letter] = 0;
  return obj;
}, {});

for (let n of input) {
  let word = n.toUpperCase();
  alphabetObject[word]++;
}

let max = 0;
let maxWord = "";
for (let n in alphabetObject) {
  if (max < alphabetObject[n]) {
    max = alphabetObject[n];
    maxWord = n;
  }
}
for (let n in alphabetObject) {
  if (max === alphabetObject[n] && maxWord !== n) {
    console.log(max, maxWord);
    maxWord = "?";
    break;
  }
}
console.log(maxWord);
