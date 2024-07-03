function solution(t, p) {
  let result = 0;
  for (let n = 0; n < t.length - p.length + 1; n++) {
    let num = Number(t.substr(n, p.length));
    console.log(num);
    if (num <= p) result++;
  }
  console.log(result);
  return result;
}
