const dialogRectangle = document.getElementById('rec');
const dialogTriangle = document.getElementById('tria');
const share = document.getElementById('share');


share.addEventListener("click", toggleDialogBox);

function toggleDialogBox(){
    if ( dialogRectangle.style.visibility === "hidden" && dialogTriangle.style.visibility === "hidden" ){
        dialogRectangle.style.visibility = "visible";
        dialogTriangle.style.visibility = "visible";
    } else{
        dialogRectangle.style.visibility = "hidden";
        dialogTriangle.style.visibility = "hidden";

    }

};
