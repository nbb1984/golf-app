$(document).ready(function() {

    // Getting references to the form inputs
    var nameInput = $("#player-name");
    var emailInput = $("#player-email");
    var passwordInput = $("#player-password");
    var teamInput = $("#team-name");

    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#join-form", handleGameFormSubmit);

    // A function to handle what happens when the form is submitted to join a game
    function handleJoinFormSubmit(event) {

        event.preventDefault();

        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput.val().trim().trim()) {
            return;
        }

        // Calling the joinGame function and passing in the values in the join input

        joinGame({
            /// PLAYER DB
            PlayerName: nameInput
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
            TeamName: teamInput
                .val()
                .trim()
        });
    };

    // A function for joining an existing game
    function joinGame(gameData) {
        $.post("/api/joinGame", gameData)
    }

});