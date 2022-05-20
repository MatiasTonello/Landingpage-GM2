/* Crear una función que evalúe un string y
retorne un true o false dependiendo si
es palindromo o puede ser palindromo.

Evaluar si hay chance de que con los
caracteres del string se puede lograr
un palindromo.
Evaluar si el string dado es un
palindromo.*/

function esPalindromo(palabra){
    let stringWithoutSpace = palabra.replace(/[\W_]/g, "").toLowerCase();
    let reverseString = stringWithoutSpace.split("").reverse();
    let podriaSerPalindromo = false;
   let esPalindromo = false;
   /*let arrayCaracteresRepetidos = palabra.filter(caracters => caracter)*/
    let cadenaSinRepetidos = stringWithoutSpace.split('');

        const unicos = cadenaSinRepetidos.filter((valor, indice) => {
            return cadenaSinRepetidos.indexOf(valor) != indice
            });

        const uniqueArray = cadenaSinRepetidos.filter(value => unicos.indexOf(value) == -1)

    

  

    if(uniqueArray.length < 1){
        podriaSerPalindromo = true;
    }
    

    if(stringWithoutSpace === reverseString.join('')){
        esPalindromo = true;
    }

    if (esPalindromo || podriaSerPalindromo){
        return "La frase es o podría ser palindromo";
    } else {
        return "La frase no es palindromo";
    }
}


