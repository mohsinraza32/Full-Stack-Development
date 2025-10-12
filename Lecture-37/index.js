// // event handler

//let btn = document.getElementById('btn');

// // btn.onclick = () => {
// //   console.log('hi i m  button');
  
// // }

// // btn.onclick = () => {
// //     console.log('hi i m also button');
    
// // }

// //event listener

// btn.addEventListener('click', () => {
//     console.log('hi why you click me');
    
// })

// btn.addEventListener('click', (eventobject) => {
    
//     // console.log('hi why you click me second time');
//     console.log(eventobject.target.innerText);
      
// })

// btn.addEventListener('click', (e) => {
    
//     // console.log('hi why you click me second time');
//     // console.log(e.target.innerText);

//     e.target.innerText = 'submit';
      
// })


// Task hay ek button bnao jiske click per background change ho.

// let btn = document.getElementById('btn');
// let body = document.getElementsByTagName('body');

// btn.addEventListener('click', () => {
//       body.style.backgroundColor = "pink";    
// })

//write a program to change color with confirm box.

let btn = document.getElementById('btn');
let body = document.getElementsByTagName('body')[0];

btn.addEventListener('click', () => {
  
    const isChange = confirm('is Change');

    if(isChange){
        let colorName = prompt('which color');
        console.log(colorName);
        
        body.style.backgroundColor =  `${colorName}`;   
      
    }

})