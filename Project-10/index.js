let ticTac = document.querySelector(".ticTac");
let boxes = document.querySelectorAll(".box");

let currentPlayer = "X";

let winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,5,8],
]
ticTac.addEventListener("click", (e) => {
  //    if(currentPlayer === 'X'){
  //       currentPlayer = 'O';
  //    }else{
  //      currentPlayer = 'X';
  //    }
  if (e.target.className !== "ticTac") {
    if (e.target.innerText === "") {
      e.target.textContent = currentPlayer;
      winner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
  
  
  function winner(){
   winningCondition.forEach((items) => {
      let index0 = items[0];
      let index1 = items[1];
      let index2 = items[2];
       
      let val0 = boxes[0];
      let val1 = boxes[1];
      let val2 = boxes[2];

      console.log(index0, val0, index1, val1, index2, val2);
      
      
   })
    
  }
});



    
    
    
