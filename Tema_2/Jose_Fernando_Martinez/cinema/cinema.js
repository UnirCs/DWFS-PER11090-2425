const suggest =(bookingSize) => {
    let contador=0
    let disponiblesFila=0
    const reservas = new Set();

    for (let i = butacas.length-1; i>=0 ; i--) { //fila
       for(let j= butacas[i].length-1; j>=0; j--){ //asientos
           for(let k=butacas[i].length-1; k>=0;k--){
               if(butacas[i][k].estado === false){
                   disponiblesFila++;
               }
           }
              if(disponiblesFila>=bookingSize){
                  if(bookingSize<=butacas[i].length) {
                      if(butacas[i][j].estado === false&&contador<bookingSize){
                          butacas[i][j].estado = true;
                          reservas.add(butacas[i][j].id);
                          contador++;
                      }
                  }
                  else {
                      return new Set([]) ;
                  }
              }
              else if(disponiblesFila!==0){
                  return new Set([]) ;
              }
       }
       if(contador!==bookingSize){
           if(contador!==0){
               return new Set([]) ;
           }
         }
    }
    contador=0;
    return reservas;

};

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
            // Nuevo asiento
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

console.log("pidiendo 5 sillas ======> ");
console.log(suggest(5));
console.log("Luego pidiendo 3 sillas ======> ");
console.log(suggest(3));
console.log("Luego 2 sillas ======> ");
console.log(suggest(2));
console.log("Luego 8 sillas ======> ");
console.log(suggest(8));
console.log("Luego 2 sillas ======> ");
console.log(suggest(2));
console.log("Luego 10 sillas ======> ");
console.log(suggest(10));
