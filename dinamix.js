 
function close(id){
    document.getElementById(id).style.display = "none";
}

function disclose(id){
    document.getElementById(id).style.display = "flex";
}
function toning(id){
    document.getElementById(id).style.filter = "brightness(40%)";
}

function distoning(id){
    document.getElementById(id).style.filter = "brightness(100%)";
}



function openMenu(){
    document.getElementById('header__navigation').style.display = "flex";
    toning('brand');
}
function closeMenu(){
    document.getElementById('header__navigation').style.display = "none";
    distoning('brand');
}