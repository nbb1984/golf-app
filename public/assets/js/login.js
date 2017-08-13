$(document).ready(function() {

    // Getting references to the login form inputs
    var emailInput = $("#player-email");
    var passwordInput = $("#player-password");

    // Handle login-form submit
    $(document).on("submit", "#login-form", handleLoginFormSubmit);

    // A function to handle the login form
    function handleLoginFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput.val().trim().trim()) {
            return;
        }
        // Calling the login function and passing in the values in the login form
        login({
            /// PLAYER DB
            email: emailInput
                .val()
                .trim()
        }, {
            password: passwordInput
                .val()
                .trim()
        });
    };


    // A function for sending login data
    function login(gameData) {
        $.post("/api/login", gameData)
    }


});