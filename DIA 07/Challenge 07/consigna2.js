// .Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let numero =prompt("ingresa un numero");

function parImpar(n) {

    if (n % 2==0) {
        console.log("el numero es par");
     } else {
        console.log("el numero es impar")
     }
       
}
parImpar(numero);