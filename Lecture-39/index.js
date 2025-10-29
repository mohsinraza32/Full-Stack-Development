// setInterval

// setInterval(() => {
//    console.log('hello mohsin');
   
// },1000);

//Building mini project for setInternal in which background color should be changes in every 1 second.

// const body = document.getElementsByTagName('body');


// function changeBg(){

//     let colorString = '0123456789abcdef';
    
//     let color = '';
//     for(let i = 0; i < 6; i++){
//         let randNum = Math.floor(Math.random() * colorString.length);
//         color = color + colorString[randNum];
        
//     }
    
//     body[0].style.backgroundColor = `#${color}`;
// }

// setInterval(changeBg,1000);

// setTimeOut

// console.log('step 1');

// setTimeout(() => {
//   console.log('step 2');
  
// },1000);
// console.log('step 3');

// console.log('hello 1');
// console.log('hello 2');

// setTimeout(() => {
//     for(let i = 0; i < 1000000000; i++){
    
//     }
    
// },5000)

// console.log('hello 3');

// function fun1(){
//     console.log('hello 1');

//     setTimeout(function fun2(){
//          console.log('hello 2');
         
//     },1000);

//     console.log('hello 3');
    
    
// }
// fun1();

// function fun1(text){
//     console.log('hello 1');

//     setTimeout(function fun2(){
//          console.log(text);
         
//     },1000);

//     console.log('hello 3');

// }
// fun1('hi');

// function fun1(text){
//     console.log('hello 1');

//     setTimeout(function fun2(){
//          console.log(text);
         
//     },1000);

//     console.log('hello 3');
    
//     text = 'how are you';
// }
// fun1('hi');

// function fun1(){
//     for(var i = 0; i < 5; i++){
//         setTimeout(function fun2(){
//              console.log(i);
             
//         },i*1000);
//     }
// }
// fun1();

// function fun1(){
//     for(let i = 0; i < 5; i++){
//         setTimeout(function fun2(){
//              console.log(i);
             
//         },i*1000);
//     }
// }
// fun1();

// function fun1(){
//     for(var i = 0; i < 5; i++){
//     let j = i;
//     setTimeout(function fun2() {
//          console.log(j);
         
//     }, j*1000)
//  }

// }
// fun1();

// console.log('starting');

// setTimeout(function (){
//   console.log('settimeout');
  
// },5000);

// console.log('ending');

console.log('starting');

setTimeout(function (){
  console.log('settimeout 3');
  
},3000);
setTimeout(function (){
  console.log('settimeout 2');
  
},5000);
setTimeout(function (){
  console.log('settimeout 1');
  
});

console.log('ending');

