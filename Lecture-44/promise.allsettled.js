function api1(){
    return new Promise((res, rej) => {
      setTimeout(() => {
          res('api1')
      },5000)
    })
}
function api2(){
    return new Promise((res, rej) => {
      
      setTimeout(() => {
          res('api2')
    },2000)  
        
    })
}
function api3(){
    return new Promise((res, rej) => {
      setTimeout(() => {
          rej('promise rejected')
      },4000)
    })
}
let x = Promise.allSettled([api1(), api2(), api3()]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
    
})
