//https:unpkg.com/gridjs/dist/gridjs.umd.js

class Box {
  type;

  constructor() {
    this.type = null;
  }
}

let arrBoxes = [];

let player1;
let player2;
let p1, rb;
let turnCount = 0;

window.onload = function () {
  main();
};

function main() {
  initGame();

  const gameBoxes = document.querySelectorAll(".game-box");
  gameBoxes.forEach((el) => {
    el.addEventListener("click", onButtonPress);
  });
}

// ============== FUNCTIONS ===================

function initializeArrBoxes() {
  for (let i = 0; i < 9; i++) {
    arrBoxes[i] = new Box();
  }
}

function onButtonPress(event) {
  const idButtonClicked = event.target.dataset.id;
  const buttonContent = event.target.textContent;

  if (!checkIfPressed(buttonContent)) {
    const isFirstPlayer = turnCount % 2 === 0;
    arrBoxes[idButtonClicked].type = isFirstPlayer ? "cross" : "circle";
    event.target.textContent = isFirstPlayer ? "X" : "O";

    p1.textContent = getInstructionText();

    if (turnCount >= 4) {
      checkIfWon(arrBoxes);
    }

    turnCount++;
  } else {
    console.log("deja clicker");
  }
}

function checkIfPressed(buttonContent) {
  if (buttonContent === "X" || buttonContent === "O") {
    return true;
  } else {
    return false;
  }
}

function displayWinner(winner) {
  showResetButton();

  if (winner === "O") {
    p1.textContent = `player "O" ${player2} won the game`;
  }

  if (winner === "X") {
    p1.textContent = `player "X" ${player1} won the game`;
  }
}

function calculateWinner(resultO, resultX) {
  if (resultO === 3) {
    return "O";
  }
  if (resultX === 3) {
    return "X";
  }

  return null;
}

function checkWinInRows(boardData) {
  for (let i = 0; i < boardData.length; i += 3) {
    let resultO = 0;
    let resultX = 0;

    for (let j = i; j < i + 3; j++) {
      if (arrBoxes[j].type === "circle") {
        resultO += 1;
      }
      if (arrBoxes[j].type === "cross") {
        resultX += 1;
      }
    }

    const winner = calculateWinner(resultO, resultX);
    if (winner) {
      displayWinner(winner);
      return true;
    }
  }
  return false;
}

function checkWinInColumns(boardData) {
  for (let i = 0; i < 3; i++) {
    let resultO = 0;
    let resultX = 0;
    for (let j = i; j < boardData.length; j += 3) {
      if (arrBoxes[j].type === "circle") {
        resultO += 1;
      }
      if (arrBoxes[j].type === "cross") {
        resultX += 1;
      }

      const winner = calculateWinner(resultO, resultX);
      if (winner) {
        displayWinner(winner);
        return true;
      }
    }
  }
  return false;
}

function checkIfWinDiagonals(boardData) {
  //check diagonal left
  let resultO = 0;
  let resultX = 0;
  for (let i = 0; i < boardData.length; i += 4) {
    if (arrBoxes[i].type === "circle") {
      resultO += 1;
    }
    if (arrBoxes[i].type === "cross") {
      resultX += 1;
    }
  }
  let winner = calculateWinner(resultO, resultX);
  if (winner) {
    displayWinner(winner);
    return true;
  }

  //check diagonal right
  resultO = 0;
  resultX = 0;
  for (let i = 2; i <= 6; i += 2) {
    if (arrBoxes[i].type === "circle") {
      resultO += 1;
    }
    if (arrBoxes[i].type === "cross") {
      resultX += 1;
    }
  }
  winner = calculateWinner(resultO, resultX);
  if (winner) {
    displayWinner(winner);
    return true;
  }

  return false;
}

function checkIfWon(boardData) {
  if (checkWinInRows(boardData)) {
    return;
  }

  if (checkWinInColumns(boardData)) {
    return;
  }

  if (checkIfWinDiagonals(boardData)) {
    return;
  }

  if (turnCount >= 8) {
    p1.textContent = "TIE!";
    showResetButton();
  }
}

function showResetButton() {
  const rb = document.querySelector(".modal");
  const bd = document.querySelector(".backdrop");
  rb.style.visibility = "visible";
  rb.style.opacity = "1";

  bd.style.visibility = "visible";
  bd.style.opacity = "1";
}

function showInputPlayers() {
  p1 = document.querySelector("p");
  p1.textContent = "PLAYER'S NAME";
  const bd = document.querySelector(".backdrop");
  bd.style.visibility = "visible";
  bd.style.opacity = "1";
  const np = document.querySelector(".modal-2");
  np.style.visibility = "visible";
  np.style.opacity = "1";
}

function inputPlayerName() {
  const ip1 = document.getElementById("player-1");
  player1 = ip1.value;
  console.log(player1);
  const ip2 = document.getElementById("player-2");
  player2 = ip2.value;

  p1 = document.querySelector("p");
  p1.textContent = getInstructionText();

  const np = document.querySelector(".modal-2");
  np.style.visibility = "hidden";
  np.style.opacity = "0";
}

function initGame() {
  showInputPlayers();

  const sb = document.querySelector(".submit-button");
  sb.addEventListener("click", inputPlayerName);

  const bd = document.querySelector(".backdrop");
  bd.style.visibility = "hidden";
  bd.style.opacity = "0";

  const rb = document.querySelector(".modal");
  rb.style.visibility = "hidden";
  rb.style.opacity = "0";
  rb.addEventListener("click", initGame);

  initializeArrBoxes();
  turnCount = 0;

  const gameBoxes = document.querySelectorAll(".game-box");
  gameBoxes.forEach((el) => {
    el.textContent = "";
  });
}

function getInstructionText() {
  return `it's your turn to play, player: ${
    turnCount % 2 === 0 ? player1 : player2
  }!`;
}
