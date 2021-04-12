function openCloseMenu(){
    console.log(document.getElementsByClassName("bodyclass-menu")[0].style.display);
    if(document.getElementsByClassName("bodyclass-menu")[0].style.display === "block" || 
    document.getElementsByClassName("bodyclass-menu")[0].style.display === ""){
        document.getElementsByClassName("bodyclass-menu")[0].style.display= "none";
    }
    else{
        document.getElementsByClassName("bodyclass-menu")[0].style.display= "block";
    }
}

flag = false;

function ativaDesativaInstitucional(){
    if(flag){
        document.getElementById("institucional").style.background= "#433B47";
        document.getElementById("institucional-list").style.display = "none";
        flag = false;
    }
    else{
        document.getElementById("institucional").style.background= "red";
        document.getElementById("institucional-list").style.display = "block";
        flag = true;
    }
}