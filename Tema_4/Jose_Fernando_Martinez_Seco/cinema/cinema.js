

window.onload = function() {

    document.getElementById('pedido').addEventListener('input', () => {

        let bookings = suggest(document.getElementById('pedido').value);
        const myIterator = bookings.values();
        for(let i=1; i<60;i++)
        {
                document.getElementById(i).checked=false;
        }

        myIterator.forEach(value=>document.getElementById(value).checked=true);

    });
}







const suggest =(bookingSize) => {
    let contador=0
    let disponiblesFila=0
    const reservas = new Set();
    let butacasHere = setup();
    butacasHere[4][11].estado=true;
    for (let i = butacasHere.length-1; i>=0 ; i--) { //cuento las fila
       for(let j= butacasHere[i].length-1; j>=0; j--){//cuento los asientos en cada fila
           if(disponiblesFila===0)
           {
               for(let k=butacasHere[i].length-1; k>=0;k--){ //cuento los asientos disponibles osea diferentes a false
                   if(butacasHere[i][k].estado === false){
                       disponiblesFila++;
                   }
               }
           }
              if(disponiblesFila>=bookingSize){
                  if(bookingSize<=butacasHere[i].length) {
                      if(butacasHere[i][j].estado === false&&contador<bookingSize){
                          butacasHere[i][j].estado = true;
                          reservas.add(butacasHere[i][j].id);
                          contador++;
                      }
                  }
              }else {
                  disponiblesFila=0;
                  j=-1
              }

       }

    }
    return reservas;


};

// Definir el tamaño de la matriz de butacas
const F=5;//filas
const C=12;//columnas
// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 1; i <= F; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 1; j <= C; j++) {
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




