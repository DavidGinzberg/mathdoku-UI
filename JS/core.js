function focusFirstCell(){
    console.log("focusFirstCell() called");
    
    $($(this).find(".puzzleCell")
        .removeClass("active")[0]).focus();
    
    //$("#cell-0-0").focus();
}

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
                   .attr("tabindex", "0")
                   .addClass("puzzleCell")
                   .data("row", i)
                   .data("col", j)
                   .html(thisId));
        }
        theTable.append(thisRow);
    }
    $("#puzzleContainer").html(theTable);
    theTable.attr("tabindex", "0");
}

function setActiveCell(event){
    $(event.target).addClass("active");
}

function removeActiveCell(cell){
    cell.removeClass("active");
}
/* This binds the behavior for navigating around the puzzle with a keyboard.
 * Because there are no puzzle cells at document.ready, this should be done
 * with delegate bindings on #puzzleContainer
 */
function bindPuzzleCells(){
    $("#puzzleContainer").on("keypress", ".puzzleCell", function(event){
        console.warn("Keyboard navigation not implemented yet.");
    })
    .on("activate", ".puzzleCell", setActiveCell);
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
    bindPuzzleCells();
    
    $("#puzzleContainer").on("focusin",
                             ".puzzleCell",
                             function (event){
                                setActiveCell(event);
                                event.stopPropagation();
                                event.preventDefault();
                                return false;
                             });
    $("#puzzleContainer").on("focusin", "#puzzleGrid", focusFirstCell);
});