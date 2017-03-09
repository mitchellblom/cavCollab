//////////////////// REFERENCES /////////////////////////
var landedChoice = document.getElementById("landedMetric");
var checkedScores = [];
var checkedScoresToDOM = document.getElementById("scoresSelected");

function removeUncheckedScoresFromDom(e) {
        var index = checkedScores.indexOf(e.target.value); 
            if (index > -1) {
                checkedScores.splice(index, 1);
                }
        checkedScoresToDOM.innerHTML = checkedScores.join(", ");
}
var totalScoreToDOM = document.getElementById("totalScore");

//////////////////// ADDING METRICS ///////////////////

landedChoice.addEventListener("click", function(e) {
    // console.log(e);
    if (e.target.checked) {
        CollabScale.addLanded(e.target.value);
        checkedScores.push(e.target.value);                             
        checkedScoresToDOM.innerHTML = checkedScores.join(", ");
    } else {
        CollabScale.subtractLanded(e.target.value);
        removeUncheckedScoresFromDom(e);
    }
});

//////////////////// SCORE TO DOM///////////////////

function adjustTotalToDOM (totalScore) {
            totalScoreToDOM.innerHTML = totalScore + "%";
        };
