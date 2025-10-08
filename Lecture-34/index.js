// let name = 'Mohsin';
// for(let i = 0; i <= 10; i++){
//     console.log(`${name} ${i}`);
// }

//Normal function
// function fun(){
//     return {hello: 'mohsin'};
// }
// console.log(fun());

//Arrow function
// const fun = () => {
//     return {hello: 'mohsin'};
// }
// console.log(fun());

//function expression
// const fun = function (){

//     console.log({'name':'Mohsin'});
// }
// fun();

//hoisting

// console.log(a);  //before execution a = 'undefined'
// var a = 'mohsin';//after execution a = 'mohsin'

// console.log(a);
// let a = 'mohsin';//error show hoga qke a = uninitialized

// console.log(a);
// const a = 'mohsin';//error show hoga qke a = uninitialized

// function fun1(){
//     console.log('hello');
// }
// console.log(fun1()); //undefined arah qke function kuch return ni kr raha.

// fun1();
// function fun1(){
//     console.log('hello');//output: hello
// }

// fun1();
// let fun1 = () => {
//    console.log('hello');//error because of arrow function.
// }

// fun1();
// var fun2 = () => {
//    console.log('hello');//error because of arrow function.
// }

// fun1();
// const fun3 = () => {
//    console.log('hello');//error because of arrow function.
// }

// fun1();

// const fun1 = function (){
//     console.log('hello'); //error
// }

// callback

// function one(two){
//     console.log('hello');
//     console.log(two);
//     two();

// }
// function two(){
// console.log('good noon');

// }

// one(two);

// function one(){
//     console.log('hello');
//     console.log(two);
//     two();

// }
// function two(){
// console.log('good noon');

// }

// one(two());

// function one(para, fun) {
//   console.log(fun);
//   console.log(para);
//   fun();
// }
// function two() {
//   console.log("hello");
// }

// one(45, two());

// function one(para, fun) {
//   console.log(fun);
//   console.log(para);
//   fun();
  
// }
// function two() {
//   console.log("hello");
// }

// one(45, function (){
//    console.log('anonymous fucntion');
    
// });

// function one(para, fun) {
//   console.log(fun);
//   console.log(para);
//   fun();
  
// }
// function two() {
//   console.log("hello");
// }

// one(45, () => {
//    console.log('anonymous fucntion');
    
// });


// function add(a,b){
//     // console.log(a + b);
//     return a + b;
// }
// function sub(a,b){
//     // console.log(a - b);    
//     return a - b;
// }

// function calculateArth(num1,num2, fn){
//     return fn(num1,num2);  // sub = fn => fn = sub => fn(4,5);
    
// }
// let result = calculateArth(4,5, sub);
// console.log(result);
