// Calculate Tip Function

function calculateTip() {
    let mealAmt = document.getElementById("billAmount").value;
    let tipLevel = document.getElementById("tipPercent").value;
    let numParty = document.getElementById("amountPeople").value;

    



    let tipAmount = (mealAmt * tipLevel) / numParty;

    let finalTip = tipAmount.toFixed(2);


    // return finalTip;


document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = "$ " + finalTip + " each";
}

//Hide the tip result area on load
document.getElementById("totalTip").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
}