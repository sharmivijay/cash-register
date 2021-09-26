var billAmount = document.querySelector("#input-bill");
var cashAmount = document.querySelector("#input-cash");
var btnCheck = document.querySelector("#btn-check");
var errorMessage = document.querySelector(".error-msg");
const noOfNotes =  document.querySelector(".no-of-notes");
const returnNote = [2000,500,100,20,10,5,1];


btnCheck.addEventListener("click", validateBillAmount);


function validateBillAmount() {
    hideErrorMessage();
    if(billAmount.value >= 0){
        console.log("cashamount value: ",cashAmount.value);
        if(parseInt(cashAmount.value) > parseInt(billAmount.value)){
            var balance = cashAmount.value - billAmount.value;
            calculateChange(parseInt(balance));
        }else{
            console.log("here");
            showErrorMessage("Do you want to wash plates?");
        }

    }else{
        showErrorMessage("Invalid Bill amount");
    }
}

function showErrorMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText =message;
}

function hideErrorMessage(){
    errorMessage.style.display ="none";
}

function validateCashAmount() {
    cash = cashAmount.value;
    calculateChange();
}

function calculateChange(balance) {
    for (let i = 0; i < returnNote.length; i++) {
        // var note = balance/returnNote[i];
        var note =0;
        note = Math.floor(balance /  returnNote[i]);
        console.log(note);
        balance = balance - ( returnNote[i] * note);
        console.log(balance);
        noOfNotes[i].innerText = note;
        }
}