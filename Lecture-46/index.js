// async function api(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let result = await response.json();
//     console.log(result);
    
// }
// api();


// async function api(){
//     let response = fetch("https://jsonplaceholder.typicode.com/users")
//        .then((res) => {
//          return res.json();
//        })
//        .then((data) => {
//            console.log(data);
//        })
    
// }
// api();

let num1 = 5;
let num2 = 10;
async function api(){
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/sum?a=${num1}&b=${num2}`);
        let result = await response.json();
        console.log(result);
    }catch(err){
       console.log('error agya bhai!');
    }finally{
        console.log('always execute');
        
    }
    
}
api();