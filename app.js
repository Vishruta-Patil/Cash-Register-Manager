const billAmount = document.querySelector("#amount");
const cashGiven = document.querySelector("#cash");
const submitbtn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".error-msg");
const totalNoOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector(".next-btn");
const primaryContainer = document.getElementById("primary-container");
const secondaryContainer = document.getElementById("secondary-container");

var availableNotes = [2000,500,100,20,10,1];

showMessage = (message) => {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = message;
}

calculateChange = (changeAmount) => {
    for(let i=0;i<availableNotes.length;i++) {
        const totalNotes = Math.trunc(changeAmount / availableNotes[i]);
        changeAmount = changeAmount % availableNotes[i];
        totalNoOfNotes[i].innerText = totalNotes;
    }
}


// Hide / Display Toggle
primaryContainer.style.display = "none";
secondaryContainer.style.display = "none";

nextButtonToggle = () => {
    if (primaryContainer.style.display === "none") {
        primaryContainer.style.display ="block";
    }  
    nextButton.style.display = "none";
}

checkButtonToggle = () => {
    if (secondaryContainer.style.display === "none") {
        secondaryContainer.style.display ="block";
    }  
}


validateAmount = () => {
    errorMsg.style.display = "none";
    if(billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturn);
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
nextButton.addEventListener("click", nextButtonToggle) ;
submitbtn.addEventListener("click",checkButtonToggle);

