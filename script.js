let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function makeMove(index) {
  if (board[index] === "" && !checkWinner()) {
    board[index] = currentPlayer;
    document.getElementById("board").children[index].innerText = currentPlayer;
    if (checkWinner()) {
      document.getElementById("message").innerText =
        "Player " + currentPlayer + " wins!";
    } else if (!board.includes("")) {
      document.getElementById("message").innerText = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("message").innerText =
        "Player " + currentPlayer + "'s turn";
    }
  }
}

function resetBoard() {
  for (let i = 0; i < board.length; i++) {
    board[i] = "";
    document.getElementById("board").children[i].innerText = "";
  }
  document.getElementById("message").innerText = "Player X's turn";
  currentPlayer = "X";
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}
