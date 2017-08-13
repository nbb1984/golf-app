$(document).ready(function() {

    // Getting references to the form inputs
    var currentHole = $("#hole");
    var strokes = $("#strokes");

    // Handle enter-form submit
    $(document).on("submit", "#enter-form", handleEnterFormSubmit);

    // A function to handle what happens when a user enters strokes for a hole
    function handleEnterFormSubmit(event) {

        event.preventDefault();

        // Don't do anything if the hole/strokes fields haven't been filled out
        if (!curretHole.val().trim().trim() || !strokes.val().trim().trim()) {
            return;
        }

        // Calling the enterScore function and passing in the values in the enter-form

        enterScore({
            /// PLAYER TO GAME DB
            holeID: currentHole
                .val()
                .trim()
        }, {
            score: strokes
                .val()
                .trim()
        });
    };

    // A function for sending score infor
    function enterScore(gameData) {
        $.post("/api/enterscore", gameData)
    }

});