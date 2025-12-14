// const promise = new Promise(function fun1(res, rej){
//     res('promise resolved');
// })
// promise.then((data) => {
//     console.log(data);
    
// })

//Solving the problem of inversion control by promise.

// function searchFood(item){
//    return new Promise(function fun1(res, rej){
//      console.log('Searching start for', item, '........');
//      setTimeout(function timer1(){
//         let data = `List of ${item}`;
//         //res(item, data);   wrong
//         // res([item,data]);  correct 
//         res({item,data}); 
//      },3000);
     
//    });
// }

// function orderFood(item){
//     return new Promise(function fun2(res, rej){
//         console.log("Select", item);
//         setTimeout(function timer2() {
//           let id = Math.floor(Math.random() * 999999);
//           res(id);
//         }, 4000);
//     })
  
// }

// function payment(item,id){

//     return new Promise(function fun3(res, rej){
//         console.log(`payment started for ${item} with id no.`, id);
//         setTimeout(function timer3() {
//            let status = true;
//            res(status); 
//         }, 6000);
//     })
    
// }


// let result = searchFood('biryani').then(function success1(item,data){
//     console.log(item.data);
//     orderFood(item.item).then(function success2(id){
//      console.log("Orderid created successfully with id no.", id);
//      payment(item.item, id).then(function success3(status){
//            console.log(`payment successfully with status`, status);
//      }) 
//     })
// })

//upper code solve inversion of control problem but with promise hell.

//Now we solve promise hell from our code

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

let result = searchFood('biryani')
.then(function success1(detail){
    console.log(detail.data);
    return orderFood(detail.item);
})
.then(function success2(detail2){
   console.log("Orderid created successfully with id no.", detail2.id);
   return payment(detail2.item, detail2.id);
   
})
.then(function success3(status){
    console.log(`payment successfully with status`, status);
})


