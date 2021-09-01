<<<<<<< HEAD

function calculateTip() {
    let mealAmt = document.getElementById("mealTotal").value;
    let tipLevel = document.getElementById("tipPercent").value;
    let numParty = document.getElementById("numPeople").value;
=======
function calculateTip() {
    let mealAmt = document.getElementById("billAmount").value;
    let tipLevel = document.getElementById("tipPercent").value;
    let numParty = document.getElementById("amountPeople").value;

    


>>>>>>> troyBranch

    let tipAmount = (mealAmt * tipLevel) / numParty;

    let finalTip = tipAmount.toFixed(2);


    // return finalTip;


<<<<<<< HEAD
document.getElementById("tipDisplay").style.display = "block";
=======
document.getElementById("totalTip").style.display = "block";
>>>>>>> troyBranch
document.getElementById("tip").innerHTML = "$ " + finalTip + " each";
}

document.getElementById("calculate").onclick = function() {
    calculateTip();
}