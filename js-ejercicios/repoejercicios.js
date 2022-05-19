const resultadoContainer = document.getElementById("resultado");
const form = document.getElementById("ejer-form");
const input = document.getElementById("miinput");
const listEjerc = document.getElementById("ejercicios");
const infoToUser = document.getElementById("div__info");


const opcionCambiada = () => {
    console.log("cambio");
    const opcionSeleccionada = listEjerc.selectedIndex;
    if(opcionSeleccionada === 0 ){
        infoToUser.innerHTML = "<p> A continuación ingrese el array </p>";
    }
    if(opcionSeleccionada === 1){
        infoToUser.innerHTML = "<p> A continuación ingrese el array del cual desea saber si hay número par y sus paridades </p>";
    }
    if(opcionSeleccionada === 2){
        infoToUser.innerHTML = "<p> A continuación ingrese la palabra la cual desea saber si es o podría ser palonima </p>";
    }
    if(opcionSeleccionada === 3){
        infoToUser.innerHTML = "<p> A continuación ingrese el número que desea convertir a romano </p>";
    }
}


const formLogic = (event) => {
    event.preventDefault();
    console.log("Estasmos aca");
    let valorDelInput = input.value;
    console.log(valorDelInput);
    imprimirResultadoDelInput(valorDelInput);
    form.reset();
}

function imprimirResultadoDelInput(valor){
    resultadoContainer.innerHTML = "<p> " + (convertirARomano(valor) + "</p>");
    
}

form.addEventListener('submit', formLogic);
listEjerc.addEventListener('change', opcionCambiada);