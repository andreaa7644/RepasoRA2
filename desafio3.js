//1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas algebraicas.
// 2. Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0 para determinar si la casilla es clara u oscura.

const columnas = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h'];

for(let fila = 8; fila >= 1; fila--) {
    for(let col = 0; col < columnas.length; col++) {
        const columna = columnas[col];
        const coordenada = `${columna}${fila}`;

        const esClara = (fila + col) % 2 === 0;
        const tipoCasilla = esClara ? 'Clara' : 'Oscura';

        console.log (`Casilla ${coordenada} -> ${tipoCasilla}`);
    }
}

/* 3. Almacena en un array las jugadas de una partida. Usa un bucle for...of para recorrerlo, saltando
comentarios con continue e interrumpiendo el recorrido con break cuando detectes la jugada final de jaque mate (`#`) */

const jugadasPartidas = ["e2", "e4",  "//comentario", "Dxh3#", "b6"];

for (const jugada of jugadasPartidas) {

  if(jugada.startsWith("//")){
      continue;
  }
console.log(jugada);

  if(jugada.endsWith("#")){
      console.log('Fin de la partida por Jaque Mate.')
      break;
  }
}






