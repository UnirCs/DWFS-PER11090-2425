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

//Inicializar la matriz
let butacas = setup();

//Imprimir la matriz
console.log("Butacas: ", butacas);


//código
let reserva = suggest(5);
console.log(reserva);

function suggest(sits){
    let mySet = new Set();
    if(butacas[0].length < sits){
        console.log("Apartado 1");
        return mySet;
    }else if(butacas[0].length >= sits){
        let count = 0;            
        for(let i = butacas.length - 1; i >= 0; i--){
            count = 0;
            mySet.clear();             
            for (let j = butacas[i].length - 1; j >= 0; j--){ 
                if(butacas[i][j].estado == true){
                    count++;    
                    mySet.add(butacas[i][j].id);
                }else if(butacas[i][j].estado == false){
                    count = 0;
                    mySet.clear();
                }
                if(count == sits){
                    console.log("Apartado 3");
                    return mySet;
                }
            }    
        }
        console.log("Apartado 2");
        mySet.clear();
        return mySet
        
    }


    
}