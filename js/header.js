let buttonopen;
let buttonclose;

function mostrar(){
    document.getElementsByClassName("header__hamburger")[0].style.display= "block";
    
}

function ocultar(){
    document.getElementsByClassName("header__hamburger")[0].style.display= "none";
}

window.onload=function(){
    buttonopen= document.getElementById("button-open");
    buttonclose = document.getElementById("button-close");
    buttonopen.onclick=function(){
        mostrar();
    }

    buttonclose.onclick=function(){
        ocultar();
    }

}