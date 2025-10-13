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

// //write a program to change color with confirm box.

// let btn = document.getElementById('btn');
// let body = document.getElementsByTagName('body')[0];

// btn.addEventListener('click', () => {
  
//     const isChange = confirm('is Change');

//     if(isChange){
//         let colorName = prompt('which color');
//         console.log(colorName);
        
//         body.style.backgroundColor =  `${colorName}`;   
      
//     }

// })

//write a program to change color with input form

// let colorName = document.getElementById('colorName');
// let submit = document.getElementById('submit');
// let body = document.getElementsByTagName('body')[0];

// submit.addEventListener('click', (e) => {
    
//     e.preventDefault();    
//     body.style.backgroundColor = `${colorName.value}`;
//     console.log(colorName.value);
// })

//write a program to change color

// let btn = document.querySelector('#btn');
// let body = document.querySelector('body');

// function random(number){
//  return Math.floor(Math.random() * (number + 1)); 
   
// }
// btn.addEventListener('click', () => {
//    let ranCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//    document.body.style.backgroundColor = ranCol;
   
// })

// let range = document.getElementById('range');
// let body = document.querySelector('body');

// range.addEventListener('input', (e) => {
    
//     e.preventDefault();    
//     let p = document.createElement('p');
//     p.innerHTML = range.value;
//     document.body.appendChild(p)
     
// })

// ab kuch esa krna h ke ek hi p tag ho usme value change ho jae range ko ziada ya km krne per.

let range = document.getElementById('range');
let body = document.querySelector('body');
let p = document.createElement('p');


range.addEventListener('input', (e) => {
   e.preventDefault();
   p.innerHTML = range.value;
   document.body.appendChild(p)
   

})