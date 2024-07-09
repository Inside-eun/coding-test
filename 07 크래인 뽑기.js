function solution(board, moves) {
  const toyBucket = [];
  let popToy = 0;

  for (let i of moves) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i - 1] !== 0) {
        if (toyBucket[toyBucket.length - 1] === board[j][i - 1]) {
          toyBucket.pop();
          popToy += 2;
        } else {
          toyBucket.push(board[j][i - 1]);
        }
        board[j][i - 1] = 0;
        break;
      }
    }
  }
  return popToy;
}

//문제를 빨리 이해하는것이 중요한듯

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
