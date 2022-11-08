var dateOfBirth = document.querySelector("#date-of-birth");
// This will take dateofbirth 

var luckyNumber = document.querySelector("#lucky-number");
//this will take number


var checkButton = document.querySelector("#check-button");
// button 


checkButton.addEventListener('click',function getValues(){
    console.log(dateOfBirth.value,luckyNumber.value);
}
)
