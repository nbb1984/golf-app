$(document).ready(function() {

    // Incrementing Buttons
    $(".score-btn").click(function() {
        var thisBtn = $(this);
        var oldVal = thisBtn.parent().find("input").val();

        if (thisBtn.text() == "+") {
            var newVal = parseFloat(oldVal) + 1;
        } else {
            if (oldVal > 0) {
                var newVal = parseFloat(oldVal) - 1;
            } else {
                newVal = 0;
            }
        }
        thisBtn.parent().find("input").val(newVal);
    });

    // Disabled state when submit score button clicked
    $(".submit-scores-btn").click(function() {
        var thisBtn = $(this);
        var input = thisBtn.parent().find("input");
        var strokes = input.val();
        if (strokes > 0) {
            thisBtn.attr('disabled', true);
            input.attr('disabled', true);
        }
    });

    // Getting references to the form inputs
    var hole1 = $("#Hole1");
    var hole2 = $("#Hole2");
    var hole3 = $("#Hole3");
    var hole4 = $("#Hole4");
    var hole5 = $("#Hole5");
    var hole6 = $("#Hole6");
    var hole7 = $("#Hole7");
    var hole8 = $("#Hole8");
    var hole9 = $("#Hole9");
    var hole10 = $("#Hole10");
    var hole11 = $("#Hole11");
    var hole12 = $("#Hole12");
    var hole13 = $("#Hole13");
    var hole14 = $("#Hole14");
    var hole15 = $("#Hole15");
    var hole16 = $("#Hole16");
    var hole17 = $("#Hole17");
    var hole18 = $("#Hole18");

    var strokes = $("#strokes");

    // Handle enter-form submit
    $(document).on("submit", "#enter-form", handleEnterFormSubmit);

    // A function to handle what happens when a user enters strokes for a hole
    function handleEnterFormSubmit(event) {

        event.preventDefault();

        // Calling the enterScore function and passing in the values in the enter-form

        enterScore({
            /// PLAYER TO GAME DB
            Hole1: hole1
                .val()
                .trim()
        }, 
        {   Hole2: hole2
                .val()
                .trim()
        },
        {   Hole3: hole3
                .val()
                .trim()
        },
        {   Hole4: hole4
                .val()
                .trim()
        },
        {   Hole5: hole5
                .val()
                .trim()
        },
        {   Hole6: hole6
                .val()
                .trim()
        },
        {   Hole7: hole7
                .val()
                .trim()
        },
        {   Hole8: hole8
                .val()
                .trim()
        },
        {   Hole9: hole9
                .val()
                .trim()
        },
        {   Hole10: hole10
                .val()
                .trim()
        },
        {   Hole11: hole11
                .val()
                .trim()
        },
        {   Hole12: hole12
                .val()
                .trim()
        },
        {   Hole13: hole13
                .val()
                .trim()
        },
        {   Hole14: hole14
                .val()
                .trim()
        },
        {   Hole15: hole15
                .val()
                .trim()
        },
        {   Hole16: hole16
                .val()
                .trim()
        },
        {   Hole17: hole17
                .val()
                .trim()
        },
        {   Hole18: hole18
                .val()
                .trim()
        });
    };

    // A function for sending score infor
    function enterScore(gameData) {
        $.post("/api/enterscore/:PlayerId/:GameId", gameData)
    }

});