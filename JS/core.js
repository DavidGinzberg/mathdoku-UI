function buildNxNGrid(n){
    if(n < 1){
        console.error("Warning: Bad grid size:\t" + n);
    }
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