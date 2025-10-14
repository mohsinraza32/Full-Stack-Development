let btn = document.getElementById("genPassBtn");
let password = document.getElementById("pass");
let range = document.getElementById("input-range");
let rangeNo = document.getElementById("range");

let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");

let copyBtn = document.getElementById("copyBtn");

range.addEventListener("input", (e) => {
  rangeNo.innerHTML = e.target.value;
});

btn.addEventListener("click", (e) => {
  let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallLetters = "abcdefghijklmnopqrstuvwxyz";
  let numberStr = "0123456789";
  let symbolStr = "~`!@#$%^&*()_+}{";
  let finalStr = "";

  if (upperCase.checked) {
    finalStr += capitalLetters;
  }
  if (lowerCase.checked) {
    finalStr += smallLetters;
  }
  if (number.checked) {
    finalStr += numberStr;
  }
  if (symbol.checked) {
    finalStr += symbolStr;
  }

  // console.log(finalStr);

  if (finalStr === "") {
    alert("Please enter atleast one option");
  }

  // let finalStr = capitalLetters + smallLetters + numberStr + symbolStr;

  let latestPass = "";

  for (let i = 0; i < range.value; i++) {
    //    latestPass += finalStr[i];
    let randNum = Math.floor(Math.random() * finalStr.length);
    //    latestPass += finalStr[randNum];
    latestPass += finalStr.charAt(randNum);
  }
  password.innerText = `${latestPass}`;
});
copyBtn.addEventListener("click", () => {
  window.navigator.clipboard.writeText(password.innerText);
});
