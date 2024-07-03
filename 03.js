function solution(friends, gifts) {
  const num = friends.length;
  const nameTable = new Map();
  const giftTable = new Array(num).fill(0).map((_) => new Array(num).fill(0));
  const giftPoint = new Array(num).fill(0);
  const result = new Array(num).fill(0);

  //친구들 키 값을 map으로 저장하여 호출을 용이하게 함
  friends.forEach((name, idx) => {
    nameTable.set(name, idx);
  });
  //이중배열로 선물 주고받은 값 저장
  gifts.forEach((info) => {
    const [from, to] = info.split(" ");
    giftTable[nameTable.get(from)][nameTable.get(to)]++;
  });
  //선물지수값 만들기
  //각 친구들마다 본인이 준 선물갯수와 받은 선물갯수를 비교하고
  //그걸 배열에 집어넣기
  for (let i = 0; i < num; i++) {
    giftPoint[i] = giftTable[i].reduce((acc, cur) => acc + cur, 0);
    for (let j = 0; j < num; j++) {
      giftPoint[i] -= giftTable[j][i];
    }
  }
  //위 값을 바탕으로 다음달 선물 받을 횟수를 구하기
  //둘 중에 큰 쪽이 플러스 되기
  for (let i = 0; i < num; i++) {
    for (let j = i + 0; j < num; j++) {
      if (i === j) continue;
      if (giftTable[i][j] > giftTable[j][i]) result[i]++;
      if (giftTable[i][j] < giftTable[j][i]) result[j]++;
      if (giftTable[i][j] === giftTable[j][i]) {
        if (giftPoint[i] > giftPoint[j]) result[i]++;
        if (giftPoint[i] < giftPoint[j]) result[j]++;
      }
    }
  }

  console.log(Math.max(...result));
  return Math.max(...result);
}
