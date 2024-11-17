// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
          fila.push({
            id: idContador++,
            estado: false // Estado inicial libre
          });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

//Selecionar Asientos
const nSeleccion = 5;
var bOcupadas = 0;
var bLibres = 0;
var seleccion = new Set();
console.log("Asientos Preseleccionados");
if(nSeleccion > N) {
  console.log(new Set());
}
else {
  for (let i = N-1; i >= 0; i--) {
    for (let j = 0; j < N; j++) {
      if(!butacas[i][j].estado)
        bLibres++;
      else
        bOcupadas++;
    }
    for (let j = 0; j < N; j++) {
      if(seleccion.size < nSeleccion && nSeleccion <= bLibres)
        seleccion.add(butacas[i][j].id)
    }
    bOcupadas = 0
    bLibres = 0
  }
}
console.log(seleccion)
