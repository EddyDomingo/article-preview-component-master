const dialogRectangle = document.getElementById('rec');
const dialogTriangle = document.getElementById('tria');
const share = document.getElementById('share');


share.addEventListener("click", dialogBox);

function dialogBox(){
    dialogRectangle.style.visibility = "visible";
    dialogTriangle.style.visibility = "visible";
}

