var billAmount = document.querySelector("#input-bill");
var cashAmount = document.querySelector("#input-cash");
var btnCheck = document.querySelector("#btn-check");
var errorMessage = document.querySelector(".error-msg");
var noOfNotes =  document.querySelectorAll(".no-of-notes");
const returnNote = [2000,500,100,20,10,5,1];


btnCheck.addEventListener("click", validateBillAmount);

function validateBillAmount() {
    hideErrorMessage();
    if(billAmount.value > 0){
        if(parseInt(cashAmount.value) >= parseInt(billAmount.value)){
            var balance = cashAmount.value - billAmount.value;
            if(balance === 0){
                showErrorMessage("No Balance");
            }{
                calculateChange(balance);
            }
            
        }else{
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
        var note = Math.floor(balance/returnNote[i]);
        //balance = balance - ( returnNote[i] * note);
        balance = balance % returnNote[i] ;
        noOfNotes[i].innerText =  note;
        }
}