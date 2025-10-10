//implicit
// let a = 2;  
// let b = '4';
// let c = a + b;

// console.log(typeof c);

//explicit
// let a = 2;  //explicit
// let b = Number('4');
// let c = a + b;

// console.log(typeof c);

// console.log(7 + '50');  // 750
// console.log(7 + 6 + '50'); // 1350
// console.log(7 + '50' + 4); //7504
// console.log(7 + '50' + 3 + 2 +1); //750321
// console.log(7 + '50' + (3 + 3 + 1)); //7507
//console.log(7 + null); // 7
//console.log(7 + true); // 1 qke ke true = 1
//console.log(7 - '50'); //43 qke subtraction meye as a number ki trah treat krta h not string.
//console.log('ali' - 50); //NaN
//console.log(7 - 'ali');  // NaN
//console.log({} - 10);  // NaN
// console.log([] - 10); //-10


// console.log(5 - '10');

 //console.log(3 + {name:"mohsin"});  //3[object object]

//console.log(5 - {name:"mohsin"}); //NaN

// let obj = {a: 45 , toString() {return 'hello'}};

// console.log(5 + obj);

// let obj = {a: 45 , toString() {return 'hello'}, valueOf() {return 50},valueOf() {return 45}};
// //yhn right side wale ko wo chalaega or usse piche wale ko override krdega jese 3 function hn 
// //to 2 ko override kia or right se last wale ko chalya.
// console.log(5 + obj);

// let obj = {a: 45 , valueOf() {return {}},toString() {return {}}};
// console.log(5 + obj);//error aega qke object ko primitive ni bnasakte.

console.log(2 + '');//2
// console.log(2 + 'Nan'); 2Nan











