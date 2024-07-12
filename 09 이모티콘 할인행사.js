function solution(users, emoticons) {
  let result = [0, 0];
  let allSaleCase = [[]];
  const discounts = [0.9, 0.8, 0.7, 0.6]; // 10%, 20%, 30%, 40% 할인 비율

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
  // 각 할인 조합을 사용자별로 평가
  for (let saleCase of allSaleCase) {
    let totalRevenue = 0;
    let subscribingUsers = 0;

    for (let user of users) {
      let [minDiscount, minTotal] = user;
      let userTotal = 0;

      for (let i = 0; i < emoticons.length; i++) {
        let originalPrice = emoticons[i];
        let discountedPrice = saleCase[i];
        let discountPercentage =
          ((originalPrice - discountedPrice) / originalPrice) * 100;

        if (discountPercentage >= minDiscount) {
          userTotal += discountedPrice;
        }
      }

      if (userTotal >= minTotal) {
        subscribingUsers++;
      } else {
        totalRevenue += userTotal;
      }
    }

    if (
      subscribingUsers > result[0] ||
      (subscribingUsers === result[0] && totalRevenue > result[1])
    ) {
      result = [subscribingUsers, totalRevenue];
    }
  }
  return result;
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
