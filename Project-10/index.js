const ticTac = document.querySelector(".ticTac");
const boxes = document.querySelectorAll(".box");
const replayBtn = document.getElementById("replayBtn");

let currPlayer = "X";
let count = 0;
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function eventTarget(e){
  if (e.target.innerHTML === "") {
    e.target.innerHTML = currPlayer;
    count++;
    winner();
    currPlayer = currPlayer === "X" ? "O" : "X";
  }
  if(count === 9){
    heading.innerHTML = `Match Draw`;
  }
}

function winner() {
  winningCondition.forEach((item) => {
    let val0 = boxes[item[0]].innerText;
    let val1 = boxes[item[1]].innerText;
    let val2 = boxes[item[2]].innerText;

    if (val0 !== "" && val1 !== "" && val2 !== "") {
      if (val0 === val1 && val0 === val2) {
        count = 0;
        ticTac.removeEventListener('click', eventTarget);
        boxes[item[0]].classList.add("winnerClass");
        boxes[item[1]].classList.add("winnerClass");
        boxes[item[2]].classList.add("winnerClass");
        heading.innerHTML = `Winner is ${val0}`;
      }
    }
  });
}
ticTac.addEventListener('click', eventTarget);

replayBtn.addEventListener("click", (e) => {
  heading.innerHTML = `Tic Tac Toe`;
  currPlayer = "X";
  count = 0;

  boxes.forEach((item) => {
    item.innerText = '';
    item.classList.remove('winnerClass'); 
  });
ticTac.addEventListener('click', eventTarget);

});
