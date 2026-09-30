/* 1. Evaluación de Enroque (if / else combinados):
Declara las booleanas reyMovido, torreMovida y enJaque.
Un enroque solo es legal si el rey no se ha movido (!reyMovido), la torre tampoco (!torreMovida) y
no hay jaque (!enJaque). */

let reyMovido = false;
let torreMovida = false;
let enJaque = false;

if(!reyMovido && !torreMovida && !enJaque) {
    console.log("El enroque es LEGAL.");
} else {
    console.log("El enroque NO es legal.");
}


/* 2. Comportamiento por Pieza (switch):
Dado el nombre de una pieza ('torre', 'caballo', 'peon', etc.), imprime su rango de movimiento.
Incluye obligatoriamente la sección default para manejar casillas vacías o entradas inválidas. */
const pieza = "Dama";
let movimiento = "";

switch(pieza.toLowerCase()) {
    case "dama":
        movimiento = "Símbolo: ♛ | Se mueve en cualquier dirección.";
        break;

    case "peon":
        movimiento = "Símbolo: ♟ | Se mueve 1 casilla hacia adelante.";
        break;
    case "torre":
        movimiento = "Símbolo: ♜ | Se mueve en filas y columnas.";
        break;

    case "alfín":
        movimiento = "Símbolo: ♝ | Se mueve en diagonal.";
        break;

    case "caballo":
        movimiento = "Símbolo: ♞ | Se mueve en forma de 'L' y puede saltar.";
        break;

    case "rey":
        movimiento = "Símbolo: ♚ | Se mueve 1 casilla en cualquier dirección.";
        break;

    default:
        movimiento = "Casilla vacía o entrada inválida.";
}
console.log(movimiento);

/* 3. Promoción de Peón (Operador Ternario):
Dada la fila de destino de un peón (1 a 8), utiliza un operador ternario para asignar la figura
promocionada: si llega a la fila 8 (o fila 1 en negras) se transforma en Dama ('♛' / '♕'),
en caso contrario sigue siendo Peón. */

const figura = "PEON";
const fila = 5;

let transforma = (fila === 8 || fila === 1) ? "Dama ♛ / ♕ " : "Peón ♟ / ♙ ";

console.log(`El peón en la fila ${fila} ahora es: ${transforma}`);

