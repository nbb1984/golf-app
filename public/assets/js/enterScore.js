$(document).ready(function() {

    // Getting references to the form inputs
    var Hole1 = $(".Hole1");


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
            Hole1: Hole1
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