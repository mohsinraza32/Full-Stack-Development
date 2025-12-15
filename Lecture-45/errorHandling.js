// function searchFood(item){
//    return new Promise(function fun1(res, rej){
//      console.log('Searching start for', item, '........');
//      setTimeout(function timer1(){
//         let data = `List of ${item}`;
//         if(data){
//             res({item,data}); 
//         }else{
//             // rej('List is empty');  not best
//             rej(new Error('List is empty')); //best way
//         }
            
//      },3000);
     
//    });
// }

// function orderFood(item){
//     return new Promise(function fun2(res, rej){
//         console.log("Select", item);
//         setTimeout(function timer2() {
//           let id = Math.floor(Math.random() * 999999);
//           res({item,id});
//         }, 4000);
//     })
  
// }

// function payment(item,id){

//     return new Promise(function fun3(res, rej){
//         console.log(`payment started for ${item} with id no.`, id);
//         setTimeout(function timer3() {
//            let status = false;
//            if(status){
//                res(status); 
//            }else{
//             rej(new Error(`Payment not successfull due to some isue with status ${ status }`));
//            }
//         }, 6000);
//     })
    
// }

// let result = searchFood('biryani')
// .then(
//     function success1(detail){
//     console.log(detail.data);
//     return orderFood(detail.item);
// })
// .then(function success2(detail2){
//    console.log("Orderid created successfully with id no.", detail2.id);
//    return payment(detail2.item, detail2.id);
   
// })
// .then(function success3(status){
//     console.log(`payment successfully with status`, status);
// },
// // function reject(err){ //error handle hamesha sab se last m krna h.
// //      console.log(err);
     
// // }
// )
// .then(() => {
//     console.log('after error');
    
// })
// .catch(function reject(err){ //isko bhi last m use krna h.
//     console.log(err);
    
// })
// .finally(() => {
//     console.log('ye ek bar zarur chalta h promise settled hone per chahe reject ho ya resolve');
    
// })




//error handle using try and catch
function searchFood(item){
   return new Promise(function fun1(res, rej){
     console.log('Searching start for', item, '........');
     setTimeout(function timer1(){
        let data = `List of ${item}`;
        //res(item, data);   wrong
        // res([item,data]);  correct 
        if(data){
            res({item,data}); 
        }else{
            rej(new Error('List is empty'));
        }
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
           let status = false;
           if(status){
               res(status); 
           }else{
            rej(new Error(`payment not successful with status ${ status }`));
           }
        }, 6000);
    })
    
}

async function foodOrder(item){
    try{
        let res1 = await searchFood(item);
        console.log(res1.data);
        let res2 = await orderFood(res1.item);
        console.log("Orderid created successfully with id no.", res2.id);
        let res3 = await payment(res2.item, res2.id);
        console.log(`payment successfully with status`, res3); 
    }catch(err){
        console.log(err);  
    }finally{
        console.log('always execute');
        
    }

}
foodOrder('pizza');