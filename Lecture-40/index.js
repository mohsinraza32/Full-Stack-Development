// function searchFood(item) {
//     console.log('Seraching start for',item, '......');

//   setTimeout(function timer1() {
//     let data = `item is ${item}`;
//     return data;
//   }, 3000);
// }
// let result = searchFood("burger");
//  console.log(result);

function searchFood(item, cb1) {
  console.log("Seraching start for", item, "......");

  setTimeout(function timer1() {
    let data = `item is ${item}`;
    cb1(item, data);
  }, 3000);
}

function orderFood(item,cb2) {
  console.log("Select", item);
  setTimeout(function timer2() {
      let id = Math.floor(Math.random() * 999999);
      cb2(id,item);
      
  }, 4000);
}

function payment(item,id){
    console.log(`payment starting successfully for ${item} with id no ${id}`);
    
    setTimeout(function timer3(){
        let status = true;
       
    },6000)
}
let result = searchFood("burger", function fun1(item, data) {
  console.log(data);
  orderFood(item, function fun2(orderId, item){
     console.log("Order successfully created with id no", orderId);
     payment(item,id);
      
  });
});
