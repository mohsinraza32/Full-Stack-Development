//***************Promises *****************/

// console.log('start');

// const promise1 = new Promise(function fun1(resolve, reject){
//     setTimeout(() => {
//         console.log('inside settimeout');
        
//     },3000);
    
// })
// console.log('end');

// const promise1 = new Promise(function fun1(resolve, reject){
//     resolve('promise resolve');
//     // reject('promise rejected');
//     // return 'data';
//     // console.log('hello');
    
// })
// console.log(promise1);

// const promise1 = new Promise(function fun1(resolve, reject){
// //    resolve('promise resolved'); 
//     reject('promise rejected'); 
// });

// promise1.then(function success(result){
//    console.log(result);
   
// },function reject(err){
//    console.log(err);
   
// })

// const promise1 = new Promise(function fun1(resolve, reject){
// //    resolve('promise resolved'); 
//     reject('promise rejected'); 
// }).then(function success(result){
//    console.log(result);
   
// },function reject(err){
//    console.log(err);
   
// })

// const promise1 = new Promise(function fun1(resolve, reject){
// //    resolve('promise resolved'); 
//     reject('promise rejected'); 
// }).then(function success(result){
//    console.log(result);
   
// }).catch(function reject(err){
//    console.log(err);
   
// })

// function isData(item){

//     const promise1 =  new Promise(function fun1(resolve, reject){
//         if(item){
//             resolve('promise resolved');
//         }else{
//             reject('data is empty');
//         }

//     })

//     return promise1;
// }

// let result = isData('hello');

// result.then(function success(result){
//   console.log(result);
  
// });

// function isData(item){

//     const promise1 =  new Promise(function fun1(resolve, reject){
//         setTimeout(function timer1(){
//             if(item){
//                 resolve('promise resolved');
//             }else{
//                 reject('data is empty');
//             }
//         },4000);

//     })

//     return promise1;
// }

// let result = isData('hello');

// result.then(function success(result){
//   console.log(result);
  
// });

// function isData(item){

//     const promise1 =  new Promise(function fun1(resolve, reject){
//             if(item){
//                 resolve('promise resolved');
//             }else{
//                 reject('data is empty');
//             }
//     })

//     return promise1;
// }

// let result = isData('hello');

// result.then(function success(result){
//   console.log(result);
  
// });
// console.log('ending');


// function isData(item){

//     const promise1 =  new Promise(function fun1(resolve, reject){
//             if(item){
//                 resolve('promise resolved');
//             }else{
//                 reject('data is empty');
//             }
//     })

//     return promise1;
// }

// let result = isData('hello');

// setTimeout(function timer1(){
//    console.log('settimeout');
   
// },4000);
// result.then(function success(result){
//   console.log(result);
  
// });
// console.log('ending');

// const promise1 = Promise.resolve('mohsin');

// promise1.then(function result(success){
//    console.log(success);
   
// })

// const x = Promise.resolve('temporary');

// console.log(x);
// console.log('the end');



// function isData(item){

//     const promise1 =  new Promise(function fun1(resolve, reject){
//             if(item){
//                 resolve('promise resolved');
//             }else{
//                 reject('data is empty');
//             }
//     })

//     return promise1;
// }

// let result = isData('hello');

// setTimeout(function timer1(){
//    console.log('settimeout');
   
// },4000);
// let x = result.then(function success(result){
//   console.log(result);
//   return 'hello mohsin';
  
// });
// x.then(function fun1(result){
//     console.log(result);
//     return 'new promise';
    
// }).then(function fun2(result){
//     console.log(result);
    
// })

// console.log('ending');
