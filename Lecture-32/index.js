// function func1(){ // lekin hamare yhn koi esa scene ni h func() kisi bhi parent k ander ni h to iska scope global hoga.
//     let name = 'Mohsin';
//     console.log(name);
// }
// func1();

// function parentFunc(){  // ager hamara func1() ese hota kisi parent func ke ander to wo global ni hota.
// function func1(){
//     let name = 'Mohsin';
//     console.log(name);
// }
// func1();
// }
// parentFunc();

// var name = 'Mohsin';

// function func1(){
//     var name = 'Ali';
//     console.log(name);
// }
// func1();

// function func1(){
//     console.log(name);
//     var name = 'Mohsin';
// }
// func1();

// Lexical scoping

// function func1() {
//    console.log(name);
//    var name = "Mohsin";
// }
// func1();
// console.log(name);

//Auto Global
var name = 'Mohsin Raza';

function func1(){
    console.log(name);
    helo = "Mohsin";
    console.log(helo);
}
func1();
console.log(name);

// var name = 'Mohsin Raza';
// function func1(){
//     console.log(name);
//     helo = "Mohsin";
// }
// console.log(helo);
// func1();
// console.log(name);

// var name = 'Mohsin Raza';
// function func1(){
//     console.log(name);
//     helo = "Mohsin";
// }
// func1();
// console.log(helo);
// console.log(name);




