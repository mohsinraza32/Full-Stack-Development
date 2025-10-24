let ticTac = document.querySelector(".ticTac");
let boxes = document.querySelectorAll(".box");
let heading = document.getElementById("heading");
let replayBtn = document.getElementById("replayBtn");

let currentPlayer = "X";

let count = 0;
let winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// function startGame() {

// }

function eventStart(e) {
  //    if(currentPlayer === 'X'){
  //       currentPlayer = 'O';
  //    }else{
  //      currentPlayer = 'X';
  //    }
  if (e.target.className !== "ticTac") {
    if (e.target.innerText === "") {
      e.target.textContent = currentPlayer;
      count++;
      winner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    if (count === 9) {
      heading.innerText = "Match Draw";
    }
  }
}
function gameStart() {
  ticTac.addEventListener("click", eventStart);
}

// ticTac.addEventListener("click", (e) => {
//   //    if(currentPlayer === 'X'){
//   //       currentPlayer = 'O';
//   //    }else{
//   //      currentPlayer = 'X';
//   //    }
//   if (e.target.className !== "ticTac") {
//     if (e.target.innerText === "") {
//       e.target.textContent = currentPlayer;
//       winner();
//       currentPlayer = currentPlayer === "X" ? "O" : "X";
//     }
//   }
//   });

// ticTac.addEventListener("click", eventStart);

function winner() {
  winningCondition.forEach((items) => {
    let index0 = items[0];
    let index1 = items[1];
    let index2 = items[2];

    let val0 = boxes[index0].innerText;
    let val1 = boxes[index1].innerText;
    let val2 = boxes[index2].innerText;

    console.log(index0, val0, index1, val1, index2, val2);

    if (val0 !== "" && val1 !== "" && val2 !== "") {
      if (val0 === val1 && val0 === val2) {
        boxes[index0].classList.add("winnerClass");
        boxes[index1].classList.add("winnerClass");
        boxes[index2].classList.add("winnerClass");
        count = 0;
        heading.innerText = `Winner is ${val0}`;
        ticTac.removeEventListener("click", eventStart);
      }
    }
  });
}

replayBtn.addEventListener("click", () => {
  currentPlayer = "X";
  count = 0;
  boxes.forEach((items) => {
    items.innerText = "";
    items.classList.remove("winnerClass");
  });

  heading.innerText = "Tic Tac Toe";
  // ticTac.addEventListener("click", eventStart);
  gameStart();
});
gameStart();
