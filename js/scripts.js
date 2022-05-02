// --- Page Header --- //
const holeNumArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const holeParArray = [4, 4, 3, 5, 3, 5, 3, 4, 4];
const holeYdsArray = ["461", "417", "171", "485", "164", "556", "215", "436", "359"];

var holeNum = document.getElementById("holeNum");
var holePar = document.getElementById("holePar");
var holeYds = document.getElementById("holeYds");
var finalButton = document.getElementById("finalButton");
var counter = 0

holeNum.innerHTML = "Hole " + holeNumArray[counter];
holePar.innerHTML = "Par " + holeParArray[counter];
holeYds.innerHTML = holeYdsArray[counter] + " Yds";

// --- Player 1 Variables--- //
var holeScoreP1 = holeParArray[counter];
var totalPlusMinusP1 = 0;
var totalScoreP1 = 0;
var scoreP1 = document.getElementById("scoreP1");
var totalP1 = document.getElementById("totalP1");
var totalFP1 = document.getElementById("totalFP1");
var ct1 = 0
totalP1.innerHTML = "(E)";
scoreP1.innerHTML = "-";
const holeScoresP1 = new Array();

// --- Player 2 Variables --- //
var holeScoreP2 = holeParArray[counter];
var totalPlusMinusP2 = 0;
var totalScoreP2 = 0;
var scoreP2 = document.getElementById("scoreP2");
var totalP2 = document.getElementById("totalP2");
var totalFP2 = document.getElementById("totalFP2");
var ct2 = 0
totalP2.innerHTML = "(E)";
scoreP2.innerHTML = "-";
const holeScoresP2 = new Array();

// --- Button Functions --- //
function minus(player) {
    if (player == 1) {
        holeScoreP1--;
        scoreP1.innerHTML = holeScoreP1;
        ct1++;
    } else if (player == 2) {
        holeScoreP2--;
        scoreP2.innerHTML = holeScoreP2;
        ct2++;
    }
}

function plus(player) {
    if (player == 1) {
        if (ct1 == 0) {
        scoreP1.innerHTML = holeScoreP1;
        ct1++;
        } else {
        holeScoreP1++;
        scoreP1.innerHTML = holeScoreP1;
        }
    } else if (player == 2) {
        if (ct2 == 0) {
            scoreP2.innerHTML = holeScoreP2;
            ct2++;
            } else {
            holeScoreP2++;
            scoreP2.innerHTML = holeScoreP2;
            }
    }
}

// --- Display Plus Minus --- //
function displayPlusMinus() {
    // --- Player 1 --- //
    if (totalPlusMinusP1 == 0){
        totalP1.innerHTML = "(E)";
        totalFP1.innerHTML = "(E)";
    } else if (totalPlusMinusP1 > 0) {
        totalP1.innerHTML = "(+" + totalPlusMinusP1 + ")";
        totalFP1.innerHTML = "(+" + totalPlusMinusP1 + ")";
    } else if (totalPlusMinusP1 < 0) {
        totalP1.innerHTML = "(" + totalPlusMinusP1 + ")"; 
        totalFP1.innerHTML = "(" + totalPlusMinusP1 + ")"; 
    }

    if (totalPlusMinusP2 == 0){
        totalP2.innerHTML = "(E)";
        totalFP2.innerHTML = "(E)";
    } else if (totalPlusMinusP2 > 0) {
        totalP2.innerHTML = "(+" + totalPlusMinusP2 + ")";
        totalFP2.innerHTML = "(+" + totalPlusMinusP2 + ")";
    } else if (totalPlusMinusP2 < 0) {
        totalP2.innerHTML = "(" + totalPlusMinusP2 + ")";
        totalFP2.innerHTML = "(" + totalPlusMinusP2 + ")"; 
    }
}

// --- Plus Minus Calc --- //
function updateTotal() {
    // --- Player 1 --- //
    if (holeScoreP1 > holeParArray[counter]){
        totalPlusMinusP1 += (holeScoreP1 - holeParArray[counter]);
    } else if (holeScoreP1 < holeParArray[counter]){
        totalPlusMinusP1 -= (holeParArray[counter] - holeScoreP1);
    }

    // --- Player 2 --- //
    if (holeScoreP2 > holeParArray[counter]){
        totalPlusMinusP2 += (holeScoreP2 - holeParArray[counter]);
    } else if (holeScoreP2 < holeParArray[counter]){
        totalPlusMinusP2 -= (holeParArray[counter] - holeScoreP2);
    }
}

// --- Final Score --- //
function getFinalScore() {
    for (i=0; i<=8 ;i++) {
        totalScoreP1 += holeScoresP1[i];
        totalScoreP2 += holeScoresP2[i];
    }

}

// --- Final Check --- //
function finalCheck() {
    holeScoresP1.push(holeScoreP1);
    holeScoresP2.push(holeScoreP2);
    updateTotal();
    displayPlusMinus();
    holeNum.innerHTML = "Final Scores";
    holePar.innerHTML = "";
    holeYds.innerHTML = "";
    var players = document.querySelectorAll(".player");
    players.forEach(function(player){
        player.classList.toggle("d-none");
    })
    var details = document.querySelectorAll(".header-side");
    details.forEach(function(detail){
        detail.classList.toggle("d-none");
    })
    holeNum.classList.toggle("center");
    getFinalScore();
    document.getElementById("finalScoreP1").innerHTML = totalScoreP1;
    document.getElementById("finalScoreP2").innerHTML = totalScoreP2;
    document.getElementById("playAgain").classList.toggle("d-none");
    finalButton.classList.toggle("d-none");
}

// --- Next Hole Button --- //
function nextHole() {
    if (counter == 8) {
        finalCheck();
    } else {
    holeScoresP1.push(holeScoreP1);
    holeScoresP2.push(holeScoreP2);
    updateTotal();
    displayPlusMinus();
    counter++;
    ct1 = 0;
    ct2 = 0;
    holeScoreP1 = holeParArray[counter];
    holeScoreP2 = holeParArray[counter];
    scoreP1.innerHTML = "-";
    scoreP2.innerHTML = "-";
    holeNum.innerHTML = "Hole " + holeNumArray[counter];
    holePar.innerHTML = "Par " + holeParArray[counter];
    holeYds.innerHTML = holeYdsArray[counter] + " Yds";
    }

    if (counter == 8) {
        finalButton.innerHTML = "Final Scores";
    }
}