function solution(numbers, hand) {
  const result = [];
  let leftHandPosition = 10;
  let rightHandPosition = 12;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      numbers[i] = 11;
    }
    if (numbers[i] % 3 === 1) {
      result.push("L");
      leftHandPosition = numbers[i];
    }
    if (numbers[i] % 3 === 0) {
      result.push("R");
      rightHandPosition = numbers[i];
    }
    if (numbers[i] % 3 === 2) {
      let leftWay = Math.abs(numbers[i] - leftHandPosition);
      let rightWay = Math.abs(numbers[i] - rightHandPosition);
      leftWay = (leftWay % 3) + Math.floor(leftWay / 3);
      rightWay = (rightWay % 3) + Math.floor(rightWay / 3);
      if (leftWay > rightWay) {
        result.push("R");
        rightHandPosition = numbers[i];
      } else if (leftWay < rightWay) {
        result.push("L");
        leftHandPosition = numbers[i];
      } else {
        if (hand === "right") {
          result.push("R");
          rightHandPosition = numbers[i];
        } else {
          result.push("L");
          leftHandPosition = numbers[i];
        }
      }
    }
  }
  return result.join("");
}

//1,4,7 이면 왼손
//3,6,9 면 오른손
//2,5,8,0 이면 //나머지 값이 2(0은 11으로 치환)
//최소 거리 : 1
//최대 거리 : 4(0이고 1과 3에 있을때)
//3의 배수 활용

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
