const idNo = 4260403992109;
console.log("Your id No is:", idNo);  //global scope

{
  const idNo = 4260403992109;     // local scope
  console.log("Your id No is:", idNo);

  // const idNo = 426040399210988; 
  // console.log("Your id No is:", idNo);
}

let myName = "Mohsin Raza";   //global scope
console.log(myName);

{
  let myName = "Mohsin Raza";  //local scope
  console.log(myName);

  // let myName = "Mohsin Raza";
  // console.log(myName);
}

// let age = 20;
//  age = 40;
//  console.log(age);
 
const age = 20;
 age = 50;
 console.log(age);  //never allowed