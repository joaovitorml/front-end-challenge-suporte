function openMenu(){
    var y = document.getElementsByClassName("bodyclass-menu");
    if(y.display == "block"){
        y.style.display= "none";
        console.log(y);
    }
    else{
        y.style.display= "block";
    }
}

flag = false;

function ativaDesativaInstitucional(){
    var x = document.getElementById("institucional-list");
    if(flag){
        document.getElementById("institucional").style.background= "#433B47";
        x.display = "none";
        flag = false;
    }
    else{
        document.getElementById("institucional").style.background= "red";
        x.display = "block";
        console.log(x);
        flag = true;
    }
}