var score = (function(subScore) {

    var landedPoints = {
        "Price": 7,
        "Relationship": 15,
    };

    subScore.addLanded = function(landedScore) {                 
            var addingLandedScore = landedPoints[subScore];
            score.adjustScore(addingLandedScore);
            };
    subScore.subtractLanded = function(landedScore) {
            var subtractLandedScore = landedPoints[landedScore];
            score.adjustScore(-addingLandedScore);
            };

    return score;                     
})(score || {});