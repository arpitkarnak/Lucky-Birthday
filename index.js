var dateOfBirth = document.querySelector("#date-of-birth");
// This will take dateofbirth

var luckyNumber = document.querySelector("#lucky-number");
//this will take number

var checkButton = document.querySelector("#check-button");

// button

var outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (luckyNumber > 0) {
    if (sum % luckyNumber === 0) {
      outputBox.innerText = "Congrats Your BirthDay Is LUCKY";
    } else {
      outputBox.innerText = "Sad Your Birthday is not Lucky";
    }
  } else {
    outputBox.innerText = "Lucky Number should be Positive Number ";
  }
}

function checkBirthDayIsLucky() {
  var dob = dateOfBirth.value;
  var sum = calculateSum(dob);
  if (sum && dob) compareValues(sum, luckyNumber.value);
  else outputBox.innerText = "Please enter both value";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkButton.addEventListener("click", checkBirthDayIsLucky);

// function getValues(){
//     console.log(dateOfBirth.value,luckyNumber.value);
// }

// This will for consoling in browser
