// let age = 19;

// if(age >= 18){
//     console.log('you are egible for vote');
// }else{
//     console.log('you are not eligible for vote');
    
// }


// let age = 50;

// if(age <= 10){
//     console.log('chota bacha h ye to');
// }else if(age >= 11 && age <= 20){
//     console.log('javan bacha h ye to');
// }else if(age >= 21 && age <= 30){
//     console.log('ye to bara larka h koi');
    
// }else{
//     console.log('ye to budda h'); 
// }


// let age = prompt('Enter your age: ');

// if(age <= 10){
//     alert('chota bacha h ye to');
// }else if(age >= 11 && age <= 20){
//     alert('javan bacha h ye to');
// }else if(age >= 21 && age <= 30){
//     alert('ye to bara larka h koi');
    
// }else{
//     alert('ye to budda h'); 
// }

// let expression = '+';

// let num1 = 30;
// let num2 = 20;

// switch (expression) {
//     case '+':
//         console.log(num1 + num2);
//         break;

//     case '-':
//         console.log(num1 - num2);
//          break;
     
//     case '*':
//         console.log(num1 * num2);
//         break;

//     default:
//         console.log('please choose correct operator');
//         break;
// }

// ***************Loops***************

// for(let i = 0; i <= 5; i++){
//     console.log("Mohsin Raza");
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i * 2);
    
// }

// let i = 1;

// while(i <= 10){
//     console.log(i * 5);
//     i++;
// }

// let i = 1;

// do{
//   console.log(i * 5);
//   i++;

// }while(i <= 10);


//console.log((15 > 10) ? "true" : "false"); // ternary operator

// for (i = 0; i <= 10; i++){
//      if(i == 5){
//         break;
//      }
//      console.log(i);
     
// }

// for (i = 0; i <= 10; i++){
//      if(i == 5){
//         continue;
//      }
//      console.log(i);
     
// }


for(let i = 0; i < 5; i++){
   str = '';
   for(let j = 0; j < 5; j++){
    str += "*";  //str = str + * => str = '' + * => str = *
   }
   console.log(str); 
}
