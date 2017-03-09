var CollabScale = (function() {

    var totalScore = 0;
    var metrics = {
        "landedST": 0,
        "conversionST": 0
        // others here
    }

    return {
        getPrice: function() {
            return totalScore;
        },
        adjustScore: function(subtotalMetric, metricValue) {
            totalScore += currentScore;
            // console.log("totalScore", totalScore);
            adjustTotalToDOM(totalScore);
        },
        resetSubtotal: function(subtotalMetric) {    //currentScore comes from addingMeatPrice, addingCheesePrice, etc.  
            switch (subtotalMetric){
                case "landedST":
                    // landedST = 0;
                break;

            }
        }
    };
})();