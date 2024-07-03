function solution(name, yearning, photo) {
  //photo에서 있는 이름이 name에 포함되어 있지 않으면 지운다
  //photo에 있는 이름이 name에 포함되어 있으면 더한다
  //그 값을 배열에 추가한다
  let result = [];
  for (let n of photo) {
    let num = 0;
    for (let m of n) {
      let index = name.indexOf(m);
      if (index !== -1) {
        num = num + yearning[index];
      }
    }
    result.push(num);
  }
  return result;
}
