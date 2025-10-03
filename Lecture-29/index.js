// let arr = [2,45,66,77,88,65];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[2]);

// let arr = ['mohsin','abid','zulfi','asif'];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[2]);

// let arr = [2,'mohsin',true,77,'ali',65];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[2]);

let arr = [2,45,66,77,88,65];
//    arr.push(4,6,7);
//    arr.pop();
// console.log(arr);

// let newArr = arr.concat(23,55,66,99);
// console.log(arr);
// console.log(newArr);

// let findIndex = arr.indexOf(65);
// console.log(findIndex);

// let join = arr.join('*');
// console.log(join);
// console.log(arr.length);

// arr.reverse();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(3,5,6);
// console.log(arr);

// let arr1 = [2,3,5,6,7,8,5,5,4];
//  let sliceArr = arr1.slice(4,7);
// console.log(sliceArr);

// let arr1 = [2,3,5,6,7,8,5,5,4];
//  let spliceArr = arr1.splice(4,7);
// console.log(spliceArr);

// let arr1 = [1,2,3,4,5];
// let spliced = arr1.splice(1,3); 
// console.log(spliced); // [2,3,4]
// console.log(arr1);     // [1,5] (original badal gaya)

// let array = [1,2,3,4,5,6,7,8,9];

// for(let i = 0; i < arr.length; i++){
//     console.log(array[i]);
// }

// ********Array Destructuring**********

// let arr1 = [4,6,77,7,4,3];
// let [first,second,third,fourth,fifth,sixth] = arr1;
// console.log(first);
// console.log(fourth);


// ***********Object**************


// let obj = {
//     name : "Mohsin",
//     id : 34567889,
//     course : "Artificial intelliegence",
//     hosteler : false,
//     batch : "Fall-2022"
// }
// console.log(obj);
// console.log(obj['name']); // first way to access object element.
// console.log(obj.name); //second way to access object element.mostly used.
// console.log(obj.batch);
// console.log(obj.course);

// let students = [
//  {
//     name : "Mohsin",
//     id : 34567889,
//     course : "Artificial intelliegence",
//     hosteler : false,
//     batch : "Fall-2022"
// },
// {
//     name : "Zulfi",
//     id : 34567889,
//     course : "Artificial intelliegence",
//     hosteler : false,
//     batch : "Fall-2022"
// },
// {
//     name : "Abid",
//     id : 34567889,
//     course : "Artificial intelliegence",
//     hosteler : false,
//     batch : "Fall-2022"
// },
// {
//     name : "Babu",
//     id : 34567889,
//     course : "Artificial intelliegence",
//     hosteler : false,
//     batch : "Fall-2022"
// },
// {
//     name : "Ruhu",
//     id : 34567889,
//     course : "Artificial intelliegence",
//     hosteler : false,
//     batch : "Fall-2022"
// }
// ];

// console.log(students[1].id);
// console.log(students[3].hosteler);


let obj = {
    name : 'mohsin',
    id : '345667',
    course : 'Ai',
};

// for(let key in obj){

//     // console.log(key);
//     // console.log(obj[key]);
    
// }

// let fruits = ['grapes','mango','apple','banana'];
// for(let fruit of fruits){
//     console.log(fruit);
    
// }

// ************** template **********

// let str = 'Hello';
// console.log(`${str} mohsin`);

// *************spread operator *************
//for array
// let arr1 = ['mohsin','ali','abid','zahid'];
// let arr2 = ['shahid','waseem','babu'];

// let newArr = [...arr1,...arr2];
// console.log(newArr);

//for object

// let obj1 = {
//     name : 'mohsin',
//     id : '36464',
//     section : 'evening',
// }
// let obj2 = {
//     name : 'zahid',
//     id : '45677',
//     section : 'morning',
// }

// let newObj = {...obj1,...obj2};
// console.log(newObj);


//Object destructuring

// let obj2 = {
//      name : 'zahid',
//      id : '45677',
//      section : 'morning',
//  }

//  let {name,id,section} = obj2;
//  console.log(name);
//  console.log(id);
//  console.log(section);

//  Rest operator 

// let arr1 = ["banana","orange","mango","grapes","pineapple"];
//  let [one,two,three, ...rest] = arr1;
//  console.log(one);
//  console.log(two);
//  console.log(three);
//  console.log(rest);

let obj1 = { 
    name : 'zahid',
    id : '45677',
    section : 'morning',
    class : 'final year'
} 
let {name,id, ...rest} = obj1;

console.log(name);
console.log(id);
console.log(rest);















