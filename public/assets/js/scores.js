 $(document).ready(function() {

     /// FUNCTIONS

     // (1) FOR EACH TEAM SCORECARD, FIND THE LOWEST SCORE BY A PLAYER FOR EACH HOLE
     // ADD THE LOWEST SCORE TO THE TEAM'S ROW IN THE GROUP SCOREBOARD

     // (2) SUM THE TOTAL NUMBER OF STROKES PER HOLE

     // (3) FIND THE PLAYER/TEAM WITH THE LOWEST SCORE FOR ALL COMPLETED HOLES


     // ---------------------------- (1) GROUP SCOREBOARD ---------------------------- //

     // Find the lowest score from each team and input into the group scorecard

     var findWinner = function() {

         // For each playerTable
         $("table[id*='playerTable']").each(function(i, a) {
             console.log(a);

             // For each hole
             $(a).find("tr:first-child>td:not('.rowsum')").each(function(j) {
                 var j = j;
                 var bestHoleScore = 100;
                 // For each row (player) in the playerTable
                 $(a).find(".scoreRow").each(function(k, c) {
                     if (Number($(c).find("td:eq(" + j + ")>input")[0].value) > 0) {
                         bestHoleScore = (Number($(c).find("td:eq(" + j + ")>input")[0].value) < bestHoleScore) ? $(c).find("td:eq(" + j + ")>input")[0].value : bestHoleScore;
                     }
                 });
                 bestHoleScore = (bestHoleScore == 100) ? 0 : bestHoleScore;
                 $("#groupTable>tbody>tr:eq(" + i + ")>td:eq(" + j + ")>input")[0].value = bestHoleScore;

             });

         })
     }

     findWinner(); 


     // ---------------------------- (2) SUM ALL SCORE ROWS ---------------------------- //

     // Sum all score rows

     // Variables to run newSum
     var row = 0,
         col = 0,
         ncol = 0;
     var sum;


     function newSum(event) {

         // sum by row
         $("tr").each(function(rowindex) {
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

     newSum();
 });