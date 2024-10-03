const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim().split(" ").map(Number));

//1.무조건 첫 번째 도시에서 다음 도시까지 거리만큼 기름은 주유해야함
//2. 제일 작은 수 만큼 주유 *거리 해서 더함
//3. 더 작은수 나오면 그만큼 으로 수정함
let minNum = BigInt(input[2][0]); // BigInt로 변환
let result = BigInt(0); // 결과도 BigInt로 초기화

result += minNum * BigInt(input[1][0]); // 첫 번째 곱셈에 BigInt 사용

for (let n = 1; n < input[1].length; n++) {
  if (BigInt(input[2][n]) < minNum) {
    minNum = BigInt(input[2][n]); // minNum을 BigInt로 처리
  }
  result += minNum * BigInt(input[1][n]); // 곱셈과 더하기를 BigInt로 처리
}

console.log(result.toString()); // 출력 시에도 BigInt를 문자열로 변환하여 출력
