const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const MaxLenghth = Number(input[0].split(" ")[1]);

input.shift();

let arr = input
  .filter((el) => {
    // [1]
    if (el.length >= parseInt(MaxLenghth)) return el;
  })
  .sort()
  .sort((a, b) => b.length - a.length);

let map = new Map();
for (let x of arr) {
  //[2]
  if (map.has(x)) map.set(x, map.get(x) + 1);
  else map.set(x, 1);
}

let sortArr = [...map].sort((a, b) => b[1] - a[1]); //[3]

let sortTmp = [];
for (let x of sortArr) {
  sortTmp.push(x[0]); //[4]
}

console.log(sortTmp.join("\n"));
//범위를 넘는 단어만 추리고
//자주나오는것>길이가긴것>단어순 이기 때문에
//먼저 단어순으로 정렬후 그 것을 길이순으로 정렬하면 같은 길이의 것들은 단어순으로배치
//Map함수를 생성하고
//Map을 돌면서 만약에 arr의 요소가 가지고 있으면 +1을하고
//없으면 그걸 1로 카운트를 세팅한다
//그리고 그 함수를 ...map으로 배열로 담고
//그리고 배열을 순환하면서 1번째 값의 오름차순으로 정렬한다
//그 결과를 첫번째 값만 담고, .join('\n')로 하나씩 출력한다
