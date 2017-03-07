var CollabScale = (function(maker) {

    var landedScores = {
        "Price": 1,
        "Relationship": 1,
    };

    maker.addLanded = function(landed) { // landed is the same as e.target.value passed from the DOMhandler.js
            var selectedToppings = [];
            var addLandedScore = landedScores[landed];
            CollabScale.adjustPrice(addLandedScore);
    };
    maker.subtractLanded = function(landed) {
        var addingLandedScore = landedScores[landed];
        CollabScale.adjustPrice(-addingLandedScore);
        var scoresSelectedToDOM = document.getElementById("scoresSelected");
    };

    return maker;
})(CollabScale || {});