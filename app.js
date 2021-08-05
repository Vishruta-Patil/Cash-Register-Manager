const billAmount = document.querySelector("#amount");
const cashGiven = document.querySelector("#cash");
const submitbtn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".error-msg");

showMessage = (message) => {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = message;
}


calculateChange = (c,a) => {
    var changeAmount = c-a;
    var twoThousandNote = 0, fiveHundredNote = 0, oneHundredNote = 0, twentyNote = 0, tenNote = 0, oneNote = 0;

    twoThousandNote = Math.trunc(changeAmount / 2000);
    twoThousand.innerText = twoThousandNote;
    changeAmount = changeAmount % 2000;

    fiveHundredNote = Math.trunc(changeAmount / 500);
    fiveHundred.innerText = fiveHundredNote;
    changeAmount = changeAmount % 500;

    oneHundredNote = Math.trunc(changeAmount / 100);
    oneHundred.innerText = oneHundredNote;
    changeAmount = changeAmount % 100;

    twentyNote = Math.trunc(changeAmount / 20);
    twenty.innerText = twentyNote;
    changeAmount = changeAmount % 20;

    tenNote = Math.trunc(changeAmount / 10);
    ten.innerText = tenNote;
    changeAmount = changeAmount % 10;

    oneNote = Math.trunc(changeAmount / 1);
    one.innerText = oneNote;
    changeAmount = changeAmount % 1;
}


validateAmount = () => {
    errorMsg.style.display = "none";
    if(billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            calculateChange(cashGiven.value,billAmount.value)
        } 
        else{
            showMessage("Cash Amount must be greater or equal to the bill amount");
        }
    } 

    else{
       showMessage("Bill Amount must be greater than zero");
    }
}


submitbtn.addEventListener("click", validateAmount)



