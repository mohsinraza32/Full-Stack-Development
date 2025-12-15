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
          res('api3')
      },4000)
    })
}
api1().then((data) => {
    console.log(data);  
})
api2().then((data) => {
    console.log(data);
})
api3().then((data) => {
    console.log(data);
})