/* 1. Declara constantes con los valores de las piezas: PEON=1, CABALLO=3, ALFIL=3, TORRE=5,
DAMA=9. */

const PEON = 1;
const CABALLO = 3;
const ALFIL = 3;
const TORRE = 5;
const DAMA = 9;

// 2. Declara variables para acumular los puntos de las Blancas y de las Negras inicializadas a 0.
let puntosBlancas = 0;
let puntosNegras = 0;

// 3. Simula una secuencia de 4 capturas acumulando los puntos con asignación compuesta (+=).
puntosBlancas += PEON * 2 + TORRE;
puntosNegras += CABALLO * 2 + ALFIL;

/* 4. Dado un número de jugada actual (ej. let jugada = 15;), calcula con el operador módulo (%)
 de quién es el turno. */
let jugadaActual = 15;
let turno;

if (jugadaActual % 2 !== 0) {
    console.log(`Jugada ${jugadaActual}: Turno de las Blancas`);
} else {
    console.log(`Jugada ${jugadaActual}: Turno de las Negras`);
}


/* 5. Muestra en la consola el informe completo utilizando exclusivamente Template Literals y comprueba los
 tipos de datos con typeof. */
console.log(`Puntuación de las Blancas: ${puntosBlancas} (Tipo: ${typeof puntosBlancas})`);
console.log(`Puntuación de las Negras: ${puntosNegras} (Tipo: ${typeof puntosNegras})`);
console.log(`Jugada actual: ${jugadaActual} (Tipo: ${typeof jugadaActual})`);
console.log(`Turno actual: ${turno} (Tipo: ${typeof turno})`);

