// const promise = new Promise(function fun1(res, rej){
//     res('promise resolved');
// })
// promise.then((data) => {
//     console.log(data);
    
// })

//Solving the problem of inversion control by promise.

function searchFood(item){
   return new Promise(function fun1(res, rej){
     console.log('Searching start for', item, '........');
     setTimeout(function timer1(){
        let data = `List of ${item}`;
        // res([item,data]); 
        res({item,data}); 
     },3000);
     
   });
}

function orderFood(item){
    return new Promise(function fun2(res, rej){
        console.log("Select", item);
        setTimeout(function timer2() {
          let id = Math.floor(Math.random() * 999999);
          res(id);
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


let result1 = searchFood('burger').then(function success(item,data){
    console.log(item.data);
    orderFood(item.item).then(function success2(id){
     console.log("Orderid created successfully with id no.", id);
     payment(item.item, id).then(function success3(status){
           console.log(`payment successfully with status`, status);
     }) 
    })
})


