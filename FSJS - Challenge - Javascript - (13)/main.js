// let a,b,resultado,signo;
// a = parseInt(prompt("ingresa un numero"));
// b = parseInt(prompt("ingrese el segundo numero"));
// signo =prompt("ingrese la operacion");
// switch (signo) {
//   case "+":
//     resultado =a+b;
//     break;
//   case "*":
//     resultado =a*b;

//     break;

//   case "-":
//     resultado =a-b;

//     break;
//   case "/":
//     resultado =a/b;

//     break;
// }
// alert(resultado);

// -Realizar un programa que permita ingresar por teclado 10 números en un array debe:

//Mostrar el número mayor
//Mostrar el número menor
//Mostrar los números pares
//Mostrar los números impares
//Ordenarlos de manera Ascendente
//Ordenarlos de manera Descendente

// let numero=[];

// for (let i = 0; i < 10; i++) {
//     const ingresar= prompt('ingrese un numero: ');
//     numero.push(ingresar);

// }

// numero.forEach(element => {
//     element;
// });
// console.log(numero);

// numero.forEach(element => {

//     if (element%2) {
//        return console.log(element+' es inpar');

//     }else {

//        return console.log(element+' es par');
//     }

// });

// let nMayor=numero.sort((a, b) => {
//     return a - b;
// });
// console.log(nMayor);
// let nMenor = nMayor.reverse();
// console.log(nMenor);

// -Se quiere simular un juego en el que participan N jugadores y otra persona que hace de árbitro. Cada jugador elige 4 números en el rango [1, 10], pudiendo estar repetidos. A continuación, el árbitro, sin conocer los números que ha elegido cada jugador, selecciona 2 números A y B.
// El programa debe ser capaz de calcular cuántos números de los seleccionados por cada jugador están comprendidos entre los valores A y B. Ganará el jugador que más números tenga en dicho intervalo.
// Se pide implementar un programa modular que simule el juego para 3 jugadores, teniendo en cuenta que:
// Tanto los 4 datos de cada jugador, como los valores para A y B se introducirán por teclado. En todos los casos, el programa detectará la entrada de números erróneos, solicitando nuevamente el dato hasta que sea válido.
// Se deben mostrar por pantalla no solo los aciertos de cada jugador sino los datos que ha introducido cada jugador y los que ha seleccionado el árbitro. Por último, hay que imprimir la media aritmética de los aciertos de todos los jugadores

function cargarArbitro() {
  let arbitro = [];
  let i = 0;
  while (i < 2) {
    let num = parseInt(prompt("ingresar numeros del arbitro:"));
    if (num < 10 && num > 0) {
      i++;
      arbitro.push(num);
    }
  }
  return arbitro;
}

function cargarJugadores() {
  let jugadores = [];
  let i = 0;
  while (i < 4) {
    let num = parseInt(prompt("Ingresa 4 numeros:"));
    if (num < 10 && num > 0) {
      i++;
      jugadores.push(num);
    }
  }
  return jugadores;
}

function calcularAciertos(jugadores, arbitro) {
    let contador=0;
    jugadores.forEach((element) => {
    if (element >= arbitro[0] && element <= arbitro[1]) {
        contador++;
    }
    
  });
  return contador;
}

let jugador1;
let jugador2;
let jugador3;
let arbitro;

jugador1 = cargarJugadores();
console.log(jugador1);

jugador2 = cargarJugadores();
console.log(jugador2);

jugador3 = cargarJugadores();
console.log(jugador3);

arbitro = cargarArbitro();
console.log(arbitro);
arbitro.sort((a, b) => {
  return a - b;
});

console.log("aciertos jugador 1: "+calcularAciertos(jugador1,arbitro))
console.log("aciertos jugador 2: "+calcularAciertos(jugador2,arbitro))
console.log("aciertos jugador 3: "+calcularAciertos(jugador3,arbitro))