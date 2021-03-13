// Iniciar minha variaveis

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;

let symbols = ["o", "x"];
let listWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = win();

    if (gameOver == false) {
      playerTime = playerTime == 0 ? 1 : 0;
    }
  }
  return gameOver;
}

function win() {
  for (let i = 0; i < listWin.length; i++) {
    let seq = listWin[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }

  return false;
}
function restart() {
  document.location.reload(true);
}
function Vencer() {
  let display = document.querySelector(".vencerdor");
  display.style.display = "block";
  let h1 = document.createElement("h1");
  display.appendChild(h1);
  h1.innerHTML = "Vencedor";

  let div = document.createElement("div");
  display.appendChild(div);
  div.dataset.content =
    playerTime == 0
      ? String.fromCodePoint(0x1f6e1)
      : String.fromCodePoint(0x2694);
}
