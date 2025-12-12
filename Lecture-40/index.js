function searchFood(item , cb1){
    console.log("Searching start for", item, "...........");
    
    setTimeout(function timer1() {
       let data = `item is ${item}`;
       cb1(item, data);
    },3000);
}

function orderFood(item, cb2){
  console.log("Select", item);
  setTimeout(function timer2() {
    let id = Math.floor(Math.random() * 999999);
    cb2(id);
  }, 4000);
  
}

function payment(item, id, cb3){
    console.log(`payment started for ${item} with id no.`, id);
    setTimeout(function timer3() {
       let status = true;
       cb3(status); 
    }, 6000);
    
}

let result = searchFood('burger', function fun1(item, data) {
    console.log(data);
    orderFood(item, function fun2(orderId){
    console.log("Orderid created successfully with id no.", orderId);
    payment(item, orderId, function fun3(response){
      console.log("payment successfully with id status", response);
      
    })  
    })
});

