const ticTac = document.querySelector('.ticTac');
const boxes = document.querySelectorAll('.box');
const replayBtn = document.getElementById('replayBtn');

const winningCondition = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]
let count = 0;
 
let currPlayer = 'X';

function eventStart(e){
    if(e.target.textContent === ''){
      e.target.innerHTML = currPlayer;
      count++;
      winner();
      currPlayer = currPlayer === 'X' ? 'O' : 'X';
    }
   if(count === 9){
    heading.innerHTML = `Match Draw`;
   }
    
  }

  function gameStart(){
    ticTac.addEventListener('click', eventStart);

  }
  
  
  
  function winner(){
    winningCondition.forEach(item => {
      
      let val0 = boxes[item[0]].innerText;
      let val1 = boxes[item[1]].innerText;
      let val2 = boxes[item[2]].innerText;
      
      if(val0 !== '' && val1 !== '' && val2 !== ''){
        if(val0 === val1 && val0 === val2){
          boxes[item[0]].classList.add('winnerClass');
          boxes[item[1]].classList.add('winnerClass');
          boxes[item[2]].classList.add('winnerClass');
          heading.innerText = `Winner is ${val0}`;
          ticTac.removeEventListener('click', eventStart);
          
      }
    }
    
  });
}

replayBtn.addEventListener('click', () =>{
  count = 0;
  currPlayer = 'X';
    boxes.forEach(item => {
      item.innerText = '';
      item.classList.remove('winnerClass');
    })
  ticTac.addEventListener('click', eventStart);
    heading.innerHTML = `Tic Tac Toe`;
    gameStart();

  })
  gameStart();