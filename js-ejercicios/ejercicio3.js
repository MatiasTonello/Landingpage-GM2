/* Crear una función que evalúe un string y
retorne un true o false dependiendo si
es palindromo o puede ser palindromo.

Evaluar si hay chance de que con los
caracteres del string se puede lograr
un palindromo.
Evaluar si el string dado es un
palindromo.*/

function esPalindromo(palabra){
    let newStr = palabra.replace(/[\W_]/g, "").toLowerCase();
    let reverse = newStr.split("").reverse();
    let podriaSerPalindromo = false;
    let esPalindromo = false;


    


    if(newStr === reverse.join('')){
        esPalindromo = true;
    }
     /*newStr == reverse.join('') ? esPalindromo = true : esPalindromo = false;*/

    return esPalindromo || podriaSerPalindromo;
}
