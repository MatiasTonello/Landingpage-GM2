let buttonopen;
let buttonclose;

function mostrar(){
    document.getElementsByClassName("header__hamburger")[0].style.display= "block";
    document.getElementsByClassName("border__hero")[0].style.display="none";
}

function ocultar(){
    document.getElementsByClassName("header__hamburger")[0].style.display= "none";
    document.getElementsByClassName("border__hero")[0].style.display=newLocal;
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