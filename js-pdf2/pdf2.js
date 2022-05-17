/* 1-Leer la hora por pantalla (numero entero)
 y saludar en consola segun el hoiraro: buenos dias o buenas noches. Considerar que el dia dura hasta 19hs 

 function saludar(){
     let horaActual = prompt("¿Qué hora es?", "");
     if(horaActual>=19 && horaActual<24 || horaActual >= 0 && horaActual < 6){
        console.log("Buenas noches");
     } else if( horaActual >= 6 && horaActual < 19){
         console.log("Buenos días")
     } else{
         console.log("Ingrese un horario dentro del rango de 00hs a 24hs")
     }
 }*/


/*2-Modificar el ejercicio anterior agregando que salude. Buenos dias 14hs, buenas tardes 19hs o buenas noches. Ademas el saludodebe aparecer en el body 

let horaActual = prompt("¿Qué hora es?", "");

function saludar(){
   if((horaActual >= 0 && horaActual < 6) || (horaActual >= 19 && horaActual <= 24)){
       document.write("Buenas noches");
   } else if(horaActual >= 14 && horaActual < 19){
       document.write("Buenas tardes");
   } else if (horaActual >= 6 && horaActual < 14){
       document.write("Buenos días");
   } else{
       document.write("Ingrese un horario edentro del rango de 00 a 24")
   }
}

saludar();*/


/* 3-Crear un program que según el numero de dia de la semana solicitado diga buen lunes, buen martes dependiendo el numero, en el body. 


function saludarSegunElDia() {
    let diaActual = prompt("¿Qué número de día de la semana es? ", "");
    
    switch (parseInt(diaActual)) {
        case 1:
            document.write("Buen lunes");
            break;
        case 2:
            document.write("Buen martes");
            break;
        case 3:
            document.write("Buen miercoles");
            break;
        case 4:
            document.write("Buen jueves");
            break;
        case 5:
            document.write("Buen viernes");
            break;
        case 6:
            document.write("Buen sábado");
            break;
        case 7:
            document.write("Buen domingo");
            break;
        default:
            document.write("Ingrese un número de día entre 1 y 7");
            break;
    }
}

saludarSegunElDia(); */



/* 4- Crear un programa que permita definir la estacion del año de acuerdo a un mes y dias dados 


let dia = prompt("Ingrese el número de día", "");
let mes = prompt("Ingrese el número de mes", "" );
dia = parseInt(dia);
mes = parseInt(mes);

function estacionDelAño(dia, mes){
    if((dia>= 21 && mes == 12 || dia<= 20 && mes == 3) ||(mes == 1 || mes ==2)){
        document.write("La estación del año es Verano");
    } else if ((dia>= 21 && mes == 3 || dia<= 20 && mes == 6) || (mes == 4 || mes ==5)){
        document.write("La estación es otoño");
    } else if((dia>= 21 && mes == 6 || dia<= 20 && mes == 9) || (mes == 7 || mes ==5)){
        document.write("La estación del año es invierno");
    } else {
        document.write("La estación del año es primavera");
    }
}


estacionDelAño(dia, mes);*/



// Estructuras repetitivas

/*1. Escribir la tabla de 2 en el body */

/*let i = 0;
do{
    document.write("2 " + " * " + i + " = " + 2*i);
    document.write("<br>");
    i++;
}while(i<= 40);
*/

/*2. Leer numeros enteros y mostrar la tabla de multiplicar de ese número en la consola, hasta que ingrese un 0*/

let valorEntero;

i=0;
do{
    valorEntero = prompt("Ingrese el número del que desea saber su tabla", "");
    if(valorEntero != 0){
        for(let i= 0; i<=10; i++){
            console.log(valorEntero + " * " + i + " = " + valorEntero * i);
        }
    }
} while (valorEntero != 0);

