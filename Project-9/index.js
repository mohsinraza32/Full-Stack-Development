let btn = document.getElementById("genPassBtn");
let password = document.getElementById("pass");
let slider = document.getElementById("input-range");
let rangeVal = document.getElementById("range");

let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");

btn.addEventListener("click", () => {
  let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallLetter = "abcdefghijklmnopqrstuvwxyz";
  let numberStr = "0123456789";
  let symbolStr = "~`!@#$%^&*()_}{";
  let finalStr = "";

  if (upperCase.checked) {
    finalStr += capitalLetters;
  }
  if (lowerCase.checked) {
    finalStr += smallLetter;
  }
  if (number.checked) {
    finalStr += numberStr;
  }
  if (symbol.checked) {
    finalStr += symbolStr;
  }
  if(finalStr === ''){
    alert("Please select atleast one option");
  }

  // let finalStr = capitalLetters + smallLetter + numberStr + symbolStr;

  let latestPass = "";

  for (let i = 0; i < slider.value; i++) {
    //  latestPass += finalStr[i];

    let ranNum = Math.floor(Math.random() * finalStr.length);
    // latestPass += finalStr[ranNum];
    latestPass += finalStr.charAt(ranNum);
  }
  password.innerText = `${latestPass}`;
});
slider.addEventListener("input", (e) => {
  rangeVal.innerHTML = e.target.value;
});
 
let copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', () => {
  window.navigator.clipboard.writeText(password.innerText);
    
})