let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".resetBtn");
let newBtn = document.querySelector(".newBtn");
let msgCountainer = document.querySelector(".msgCountainer");
let msg = document.querySelector(".msg");

let turnX = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const showWinner = (Winner) => {
  disableBtn();
  msgCountainer.classList.remove("hide");
  msg.innerText = `Congratulations, Winner is ${Winner}`;
};

const gameDraw = () => {
  msgCountainer.classList.remove("hide");
  msg.innerText = `The game has ended in a draw.`;
};

const restartGame = () => {
  turnX = true;
  enableBtn();
  count = 0;
};

const enableBtn = () => {
  for (btn of boxes) {
    btn.disabled = false;
    btn.innerText = "";
    msgCountainer.classList.add("hide");
  }
};
const disableBtn = () => {
  for (btn of boxes) {
    btn.disabled = true;
  }
};

function checkWinner() {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
      //  else if (
      //   pos1Val != pos2Val &&
      //   pos2Val != pos3Val &&
      //   pos1Val == pos3Val
      // ) {
      //   gameDraw();
      // }
    }
  }
}

boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnX) {
      btn.innerText = "X";

      turnX = false;
    } else {
      btn.innerText = "O";

      turnX = true;
    }
    btn.disabled = true;
    count++;
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

resetBtn.addEventListener("click", restartGame);
newBtn.addEventListener("click", restartGame);
