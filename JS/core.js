function buildNxNGrid(n){
    if(n < 1){
        console.error("Warning: Bad grid size:\t" + n);
    }
    var theTable = $("<table id='puzzleGrid'/>");
    for(var i = 0; i < n; i++){
        var thisRow = $("<tr id='row-"+i+"'/>");
        for(var j = 0; j < n; j++){
            var thisId = "cell-" + i + "-" + j;
            thisRow.append($("<td/>")
                   .attr("id", thisId)
                   .html(thisId));
        }
        theTable.append(thisRow);
    }
    $("#puzzleContainer").html(theTable);
    console.warn("Not implemented yet:\tfunction buildNxNGrid()");
}

function getNumberInput(){
    inVal = $("#puzzleDimInput").val()
    if (inVal > 0 && inVal <= 10){
        return inVal;
    }
    return -1
}

function bindButton(){
    $("#theButton").on("click", function(){
        buildNxNGrid(getNumberInput());
    });
}

$(document).ready( function(){
    bindButton();
});