/// RUN EACH TIME NEW SCORE ENTERED BY ANY PLAYER (ON LOAD)
$(document).ready(function() {

    $(".btn submit-scores-btn").click(function(event) {
        playerJS();
    });

}); // CLOSE DOCUMENT LOAD 

// ---------------------------- PLAYER JS ---------------------------- //

var playerJS = function() {

    // SUM TOTAL SCORE OF PLAYER'S STROKES
    newSum(event);

    // CHECK TO SEE IF ALL OTHER TEAMMATES HAVE ENTERED SCORE FOR THE HOLE

        // IF ALL TEAMMATES HAVE ENTERED SCORE FOR HOLE

            // FIND LOWEST SCORE

            // ADD SCORE TO GROUP SCORECARD

            // RUN GROUP JS 
            groupJS();

     // IF HOLE INCOMPLETE

            // DO NOTHING

}; // Close playerJS



// ---------------------------- GROUP JS ---------------------------- //

var groupJS = function() {

    // SUM TOTAL SCORE OF GROUP'S STROKES
    newSum(event);

    // FIND WHAT HOLE ALL GROUPS HAVE PLAYED THROUGH
    findHoles();
    console.log(col); // this should be the incomplete hole


    // COMPARE TOTAL SCORE OF CURRENT HOLE PLAYED AND UPDATE WINNING TEAM IN GAME DB



} // Close groupJS




// --------------------------- SUM STROKES -------------------------- //

function newSum(event) {
    var row = 0,
        col = 0,
        ncol = 0;
    var sum;
    // sum by row
    $(".scoreRow").each(function(rowindex) {
        sum = 0;
        col = 0;
        $(this).find("td").each(function(colindex) {
            col++;
            newval = $(this).find("input").val();
            if (isNaN(newval)) {
                $(this).html(sum);
                if (col > ncol) {
                    ncol = col - 1
                }
            } else {
                sum += parseInt(newval);
            }
        });
    });
} // Close newSum

// -------------------- FIND COMPLETE HOLES ------------------------ //

function findHoles() {
    for (col = 1; col < ncol + 1; col++) {
        console.log("column: " + col);
        sum = 0;
        $("tr").each(function(rowindex) {
            $(this).find("td:nth-child(" + col + ")").each(function(rowindex) {
                newval = $(this).find("input").val();
                console.log(newval);
                if (isNaN(newval)) {
                    console.log("column: " + col);
                    return (col);
                } else {
                    sum += parseInt(newval);
                }
            });
        });
    }
} // Close findHoles