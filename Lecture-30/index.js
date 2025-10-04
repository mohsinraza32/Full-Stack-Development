// let arr = [32,34,99,44,7];

// arr.forEach(function (val) {
//     val += 4;
//     console.log(val);
    
// })

// const hello = (arr) => {
// console.log(arr);

// }
// hello(arr);

// arr.forEach(function (arr) {  // forEach with Traditional function
//     console.log(arr)
// })

// arr.forEach((val) => console.log(val)// forEach with anonymous arrow function
// )

// arr.map(function (val) {   //map with tradional function
//     val += 2;
//     console.log(val);
    
// })



// let arr = [32,34,99,44,7];

// arr.map((val) => console.log(val) //map with anonymous arrow function
// )

// let arr = [32,34,99,44,7];

// let newArr = arr.map((val) => {
//     return val;
// })
// console.log(newArr);

// let arr = [32,45,678,99,99,45];

// let newArr = arr.filter(function(val){  //filter with tradiotional function

//     if(val <= 50){
//         return val;
//     }
//     // console.log(val);
    
// })
// console.log(newArr);

// let arr = [32,45,678,99,99,45];  

// let newArr = arr.filter((val) => {   //filter with anonymous arrow function
//     if(val <= 50){
//         return val;
//     }
// })
// console.log(newArr);

// let arr = [34,55,66,77,4,33,3];

// let newArr = arr.reduce((accu , currVal) => {
//     return accu + currVal;
// })
// console.log(newArr);


let students = [
    { name:'mohsin', course:'b-tech', branch:'cse'},
    { name:'zulfi', course:'b-tech', branch:'civil'},
    { name:'babu', course:'b-tech', branch:'cse'},
    { name:'saif', course:'b-tech', branch:'mechanical'},
    { name:'shahid', course:'b-tech', branch:'civil'},
];

let newArr = students.filter((val) => {
    if(val.branch === 'cse'){
        return val;
    }
}).map((val) => `${val.name} ${val.branch}`
                    
)
console.log(newArr);




