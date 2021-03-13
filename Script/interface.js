document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setInterval(() => {
      alert("O jogo Acabou");
    }, 10);
  }
  
  updatesquare();
}

function updatesquare() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let postion = square.id;
    let symbol = board[postion];

    if (symbol != "") {
      square.innerHTML = `<div class="${symbol}"></div>`;
    }
  });
}
