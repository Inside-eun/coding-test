function solution(users, emoticons) {
  let result = [0, 0];
  let allSaleCase = [[]];
  const discounts = [0.9, 0.8, 0.7, 0.6]; // 10%, 20%, 30%, 40% 할인 비율 // 초기 결과 배열 (빈 배열을 포함)

  for (let price of emoticons) {
    let newResult = [];
    for (let combination of allSaleCase) {
      for (let discount of discounts) {
        newResult.push([...combination, Math.floor(price * discount)]);
      }
    }
    allSaleCase = newResult;
  }
  console.log(allSaleCase);
  for (let i = 0; i<allSaleCase.length; i++) {
    for(let user of users){
        if(allSaleCase[i])
    }
  }
}

solution(
  [
    [40, 10000],
    [25, 10000],
  ],
  [7000, 9000]
);

// // 1. 모든 할인률을 구한다
// //  2. 구한 할인률에 따라 나오는 가입 유저와 수익을 산출해낸다
// // 3. 저장되어 있는 결과와 플러스 가입 유저가 많은지 비교한다
// // 3. 플러스 가입 유저가 많으면 값을 저장, 같다면 뒤의 수익을 비교한다
