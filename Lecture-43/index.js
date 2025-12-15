
// function fun2(){
//     // return Promise.resolve('hello');
//     return new Promise(function (res, rej){
//         res('hello');
//     })
// }
// let b = fun2();
// console.log(b);


// function fun2(){
//     // return Promise.resolve('hello');
//     return new Promise(function (res, rej){
//         res('hello');
//     })
// }
// fun2().then((data) => {
//     console.log(data);
    
// })



// async function fun1(){
//     return 'hello';
// }
// let a = fun1();
// console.log(a);


// async function fun1(){
//     return 'hello';
// }
// fun1().then((data) => {
// console.log(data);

// })


// function pro(){
//     return new Promise(function pro1(res, rej){
//         res('hello');
//     })
// }

// async function fun1(){
//     let x = await pro();
//     console.log(x);
//     return 'data';
    
// }
// fun1().then((data) => {
//     console.log(data);
    
// })


// function pro(){
//     return new Promise(function pro1(res, rej){
//         setTimeout(() => {
//             res('hello');
//         },10000)
//     })
// }

// async function fun1(){
//     console.log('start');
//     let x = await pro();
//     console.log('end');
//     console.log(x);
//     return 'data';
    
// }
// fun1().then((data) => {
//     console.log(data);
    
// })




// function pro(){
//     return new Promise(function pro1(res, rej){
//         setTimeout(() => {
//             res('hello');
//         },10000)
//     })
// }

// async function fun1(){
//     console.log('start');
//     let x = await pro();
//     console.log('promise resolved');
    
//     return x;
    
// }
// let y = fun1();
// // console.log(y);
// console.log('end1');
// for(let i = 0; i < 10000000000; i++){

// }

// console.log('end2');



// function pro(){
//     return new Promise(function pro1(res, rej){
//         setTimeout(() => {
//             res('hello');
//         },10000)
//     })
// }

// async function fun1(){
//     console.log('start');
//     let x = await pro();
//     console.log('end');
//     return x;
    
// }
// fun1().then((data) => {
//     console.log(data);
    
// })


//
// function pro(){
//     return setTimeout(() => {
//             console.log('hello');
//         },10000)
// }

// async function fun1(){
//     console.log('start');
//     let x = await pro();
//     console.log('end');
    
// }
// fun1();


//food order website using await

function searchFood(item){
   return new Promise(function fun1(res, rej){
     console.log('Searching start for', item, '........');
     setTimeout(function timer1(){
        let data = `List of ${item}`;
        //res(item, data);   wrong
        // res([item,data]);  correct 
        res({item,data}); 
     },3000);
     
   });
}

function orderFood(item){
    return new Promise(function fun2(res, rej){
        console.log("Select", item);
        setTimeout(function timer2() {
          let id = Math.floor(Math.random() * 999999);
          res({item,id});
        }, 4000);
    })
  
}

function payment(item,id){

    return new Promise(function fun3(res, rej){
        console.log(`payment started for ${item} with id no.`, id);
        setTimeout(function timer3() {
           let status = true;
           res(status); 
        }, 6000);
    })
    
}

async function foodOrder(item){
    let res1 = await searchFood(item);
    console.log(res1.data);
    let res2 = await orderFood(res1.item);
    console.log("Orderid created successfully with id no.", res2.id);
    let res3 = await payment(res2.item, res2.id);
    console.log(`payment successfully with status`, res3); 

}
foodOrder('pizza');

