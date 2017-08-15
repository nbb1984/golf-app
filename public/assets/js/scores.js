/// RUN EACH TIME NEW SCORE ENTERED BY ANY PLAYER (ON LOAD)
$(document).ready(function() {
	
    $(".btn submit-scores-btn").change(function(event) {
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
        }
    } // Close newSum