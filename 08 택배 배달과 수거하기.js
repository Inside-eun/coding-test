// function solution(cap, n, deliveries, pickups) {
//   let small = 0;
//   let deliveriesCopy = [...deliveries];
//   let pickupsCopy = [...pickups];

//   let allDelivers = deliveriesCopy.reduce((a, b) => a + b, 0);
//   let allPickups = pickupsCopy.reduce((a, b) => a + b, 0);

//   while (n > 0) {
//     let capOne = cap;
//     for (let i = n; i > 0; i--) {
//       if (deliveriesCopy[i - 1] === 0 && pickupsCopy[i - 1] === 0) {
//         deliveriesCopy.pop();
//         pickupsCopy.pop();
//         n--;
//         console.log(deliveriesCopy, pickupsCopy, n, small);
//       } else {
//         break;
//       }
//     }
//     for (let i = n; i > 0; i--) {
//       if (capOne >= deliveriesCopy[i - 1] && allDelivers > 0) {
//         capOne -= deliveriesCopy[i - 1];
//         allDelivers -= deliveriesCopy[i - 1];
//         deliveriesCopy[i - 1] = 0;
//       } else {
//         break;
//       }
//     }

//     for (let i = n; i > 0; i--) {
//       if (allDelivers === 0) {
//         capOne = 0;
//       }
//       if (capOne + pickupsCopy[i - 1] <= cap && allPickups > 0) {
//         capOne += pickupsCopy[i - 1];
//         allPickups -= pickupsCopy[i - 1];
//         pickupsCopy[i - 1] = 0;
//       } else {
//         break;
//       }
//     }
//     small += n * 2;
//   }
//   return small;
// }

// solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);

//1. 맨 멀리있는 것의 배달과 수거 갯수가 둘 다 0이라면 지운다
//2. 맨 멀리 있는 것의 배달 갯수가 cap 보다 작다면, 그 앞에 있는 집의 배달 갯수를 뺀다
//3. 2번의 과정에서 cap이 0이 될때까지 반복하고, 그 뒤의 집들의 배달갯수를 0으로 바꾼다
//4. 맨 멀리 있는 집의 수거 갯수도 확인하고, 2,3번의 과정과 같이 차례차례 0인 것을 지워간다
//5. 배열의 길이가 둘 다 0이 될때까지 반복한다.

//왜 안풀리는지 알겠는데 정리가 안된다~

function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let delSum = deliveries.reduce((a, b) => a + b, 0);
  let pickSum = pickups.reduce((a, b) => a + b, 0);
  //배달해야하는 화물, 수거해야할 화물 모두 0이되면 종료
  while (delSum !== 0 || pickSum !== 0) {
    deleteZero(deliveries);
    deleteZero(pickups);
    let len = Math.max(deliveries.length, pickups.length);
    answer += len * 2;
    delSum -= delItem(deliveries, cap);
    pickSum -= delItem(pickups, cap);
  }
  return answer;
}
//뒤에서 부터 0이 있으면 제거해줌
const deleteZero = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) arr.pop();
    else return;
  }
};
//현재 cap에 맞게, 뒤에서부터 빼줌
//ex) 0 3 2에 cap이 3이면 => 0 2 0
const delItem = (arr, cap) => {
  let cnt = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= cap) {
      arr[i] -= cap;
      cnt += cap;
      break;
    } else {
      cap -= arr[i];
      cnt += arr[i];
      arr[i] = 0;
    }
  }
  return cnt;
};
