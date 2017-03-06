///////////////// REFERENCES //////////////////////////

var landedScore = document.getElementById("landedPerc");

console.log("landedScore", landedScore)


///////////////// MANIPULATING DOM ///////////////////

function adjustTotalToDOM(totalScore) {
    totalPriceToDOM.innerHTML = totalScore + "%";
};

function removeUncheckedScoresFromDOM(e) {
    var index = selectedToppings.indexOf(e.target.value);
    if (index > -1) {
        selectedToppings.splice(index, 1);
    }
    selectedToppingsToDOM.innerHTML = selectedToppings.join(", ");
};