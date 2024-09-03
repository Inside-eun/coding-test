const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim().split(" ").map(Number));

function findGoldTeam(games) {
  let memberCount = {};
  let scoreCount = {};

  games.forEach((el) => {
    if (memberCount[el] === undefined) memberCount[el] = 1;
    else memberCount[el]++;
  });

  for (let key in memberCount) {
    if (memberCount[key] === 6) {
      scoreCount[key] = [];
    }
  }

  let FilterLank = [];

  games.forEach((el) => {
    if (scoreCount[el] !== undefined) {
      FilterLank.push(el);
    }
  });

  FilterLank.forEach((el, idx) => {
    if (scoreCount[el] !== undefined) {
      scoreCount[el].push(idx + 1);
    }
  });

  let WinTeam = ["", 0, 0];

  for (let key in scoreCount) {
    let score = scoreCount[key].slice(0, 4).reduce((a, b) => a + b, 0);
    if (WinTeam[1] === 0) {
      WinTeam = [key, score, scoreCount[key][4]];
    } else {
      if (WinTeam[1] > score) {
        WinTeam = [key, score, scoreCount[key][4]];
      } else if (WinTeam[1] === score && WinTeam[2] > scoreCount[key][4]) {
        WinTeam = [key, score, scoreCount[key][4]];
      }
    }
  }
  console.log(WinTeam[0]);
}

for (let n = 2; n < input.length; ) {
  findGoldTeam(input[n]);
  n += 2;
}
