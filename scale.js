var scale = (function() {

    var totalScore = 0;

    return {
        getPrice: function() {
            return totalScore;
        },
        adjustPrice: function(currentScore) {    //currentScore comes from addingLandedScore, etc.
            totalScore += currentScore;
            adjustTotalToDOM(totalScore);
        }
    };
})();