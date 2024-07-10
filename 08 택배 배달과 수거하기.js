function solution(cap, n, deliveries, pickups) {
  let small = 0;
  let deliveriesCopy = deliveries;
  let pickupsCopy = pickups;

  let allDelivers = deliveries.reduce((a, b) => a + b, 0);
  let allPickups = pickups.reduce((a, b) => a + b, 0);

  while (n > 0) {
    let capOne = cap;
    if (deliveriesCopy[n - 1] === 0 && pickupsCopy[n - 1] === 0) {
      deliveriesCopy.pop();
      pickupsCopy.pop();
      n--;
      console.log(deliveriesCopy, pickupsCopy, n);
      continue;
    }
    for (let i = n; i > 0; i--) {
      if (capOne >= deliveriesCopy[i - 1] && allDelivers > 0) {
        capOne -= deliveriesCopy[i - 1];
        allDelivers -= deliveriesCopy[i - 1];
        deliveriesCopy[i - 1] = 0;
      } else {
        break;
      }
    }
    for (let i = n; i > 0; i--) {
      console.log(i, capOne, pickupsCopy[i - 1], allPickups);

      if (capOne + pickupsCopy[i - 1] <= cap && allPickups > 0) {
        capOne += pickupsCopy[i - 1];
        pickupsCopy[i - 1] = 0;
        allPickups -= pickupsCopy[i - 1];
      } else {
        break;
      }
    }
  }
  return small;
}

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);

//1. 맨 멀리있는 것의 배달과 수거 갯수가 둘 다 0이라면 지운다
//2. 맨 멀리 있는 것의 배달 갯수가 cap 보다 작다면, 그 앞에 있는 집의 배달 갯수를 뺀다
//3. 2번의 과정에서 cap이 0이 될때까지 반복하고, 그 뒤의 집들의 배달갯수를 0으로 바꾼다
//4. 맨 멀리 있는 집의 수거 갯수도 확인하고, 2,3번의 과정과 같이 차례차례 0인 것을 지워간다
//5. 배열의 길이가 둘 다 0이 될때까지 반복한다.
