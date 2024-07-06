//실패율 : 클리어못한사람/도달한사람
//전체 스테이지의 개수 N,
//게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
//실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

function solution(N, stages) {
  let result = [];
  let people = stages.length;
  //Map 함수는 정렬이 x
  //객체는 정렬 o, 객체 사용!

  for (let i = 1; i <= N; i++) {
    result.push({
      stage: i,
      fail: (notClearPerson = stages.filter((el) => el === i).length / people),
    });
    people -= stages.filter((el) => el === i).length;
  }

  return result.sort((a, b) => b.fail - a.fail).map((el) => el.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
