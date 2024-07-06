// function solution(ingredient) {
//   let word = ingredient.join("");
//   return findBuger(word, 0);
// }

// function findBuger(word, num) {
//   if (word.search("1231") === -1) return num;
//   word = word.replace("1231", "");
//   num++;
//   return findBuger(word, num);
// }

// solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);

// 재귀를 안 해도 되는군 ?
// while로 충분하다

// function solution(ingredient) {
//   let word = ingredient.join("");
//   let num = 0;

//   while (word.includes("1231")) {
//     word = word.replace("1231", "");
//     num++;
//   }
//   return num;
// }

//시간 초과 나옴. 전체 문자열을 하는거라 시간이 오래 걸림

//스택을 사용하는게 정석이라고 함

function solution(ingredient) {
  const target = [1, 2, 3, 1];
  let stack = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    //하나씩 담고 맨 마지막 4개가 일치한다면 그 4개를 뺀다
    if (stack.length >= 4 && stack.slice(-4).join("") === target.join("")) {
      stack.splice(-4);
      count++;
    }
  }

  return count;
}
