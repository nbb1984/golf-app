$(document).ready(function() {

    // Getting references to the game-form inputs
    var nameInput = $("#player-name");
    var emailInput = $("#player-email");
    var passwordInput = $("#player-password");
    var teamInput = $("#team-name");
    var holesPlayed = $("#holes-played");
    var courseName = $("#course-name");
    var eventDate = $("#event-date");
    var eventTime = $("#event-time");

    // Handle game-form submit
    $(document).on("submit", "#game-form", handleGameFormSubmit);

    // A function to handle what happens when the form is submitted to create a new Gamee
    function handleGameFormSubmit(event) {

        event.preventDefault();

        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput.val().trim().trim()) {
            return;
        }

        // Calling the newGame function and passing in the values in the game input
        newGame({
            /// GAME DB
            CourseName: courseName
                .val()
                .trim()
        }, {
            Holes_played: holesPlayed
                .val()
                .trim()
        }, {
            Date: eventDate
                .val()
                .trim()
        }, {
            Time: eventTime
                .val()
                .trim()
        }, {
            /// PLAYER DB
            name: nameInput
                .val()
                .trim()
        }, {
            email: emailInput
                .val()
                .trim()
        }, {
            password: passwordInput
                .val()
                .trim()
        }, {
            /// TEAMDB
            Team_Name: teamInput
                .val()
                .trim()
        });
    };

    // A function for creating a game
    function newGame(gameData) {
        $.post("/api/newGame", gameData)
    }

});