var CollabScale = (function(maker) {

    var landedScores = {
        "Price": 7,
        "Relationship": 15,
    };

    maker.addLanded = function(landed, metricGroup) { // landed is the same as e.target.value passed from the DOMhandler.js
            console.log(landed, metricGroup);
            CollabScale.resetSubtotal();
            // clear subtotal every new click of a radio button within a metric
            var addLandedScore = landedScores[landed];
            // CollabScale.adjustPrice(addLandedScore);
    };

    return maker;
})(CollabScale || {});