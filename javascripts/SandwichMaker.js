var CollabScale = (function() {

    var totalScore = 0;

    return {
        getPrice: function() {
            return totalScore;
        },
        adjustPrice: function(currentScore) {    //currentScore comes from addingMeatPrice, addingCheesePrice, etc.  
            totalScore += currentScore;
            // console.log("totalScore", totalScore);
            adjustTotalToDOM(totalScore);
        }
    };
})();