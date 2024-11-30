document.addEventListener('DOMContentLoaded', () => {
//Inicializar la matriz
let butacas = setup();
draw(butacas);
//Imprimir la matriz
console.log("Butacas: ", butacas);
// Función para reservar una butaca
valueInput(butacas);
});

// Función para inicializar la matriz de butacas
function setup() {
        // Definir el tamaño de la matriz de butacas
    const N = 10; // Número de filas y columnas
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
    butacas[0][0].estado = true;
    butacas[9][1].estado = true;
    console.log(butacas);
    
    return butacas;
}

function draw(butacas) {
    let contenedor = document.getElementById('contenedor-sits');
    contenedor.innerHTML = '';

    let fragment = document.createDocumentFragment();

    for (let i = 0; i < butacas.length; i++) {
        const divFilaContainer = document.createElement('div');
        divFilaContainer.classList.add('container-sit');

        const divFila = document.createElement('div');
        divFila.classList.add('text-row');
        divFila.textContent = `Fila ${i + 1}`;
        divFilaContainer.appendChild(divFila);

        for (let j = 0; j < butacas[i].length; j++) {
            const divContenedorSits = document.createElement('div');
            divContenedorSits.classList.add('sit');

            const divSuperior = document.createElement('div');
            divSuperior.classList.add('half', 'black');
            divContenedorSits.appendChild(divSuperior);

            const divInferior = document.createElement('div');
            butacas[i][j].estado ? divInferior.classList.add('half', 'red') : divInferior.classList.add('half', 'white');
            divInferior.setAttribute('id', `sit-${butacas[i][j].id}`);
            divContenedorSits.appendChild(divInferior);

            divFilaContainer.appendChild(divContenedorSits);
        }
        fragment.appendChild(divFilaContainer);
    }    
    contenedor.appendChild(fragment);
}

function valueInput(butacas){
    let seats = document.getElementById('seats');
    seats.addEventListener('change', () => {
        let value = seats.value;
        console.log(value);
        suggest(value, butacas);
    });
}


function suggest(sits, butacas){
    draw(butacas);
    let mySet = new Set();
    let flag = false;
    if(butacas[0].length < sits){
        console.log("Apartado 1");
        mySet.clear();
        console.log(mySet);
        alert("No hay suficientes asientos para la cantidad de personas");
    }else if(butacas[0].length >= sits){
        for(let i = butacas.length - 1; i >= 0; i--){
            let count = 0;
            mySet.clear();             
            for (let j = butacas[i].length - 1; j >= 0; j--){ 
                if(butacas[i][j].estado == false && flag == false){
                    count++;    
                    mySet.add(butacas[i][j].id);
                }else if(butacas[i][j].estado == true){
                    count = 0;
                    mySet.clear();
                }
                if(count == sits){
                    console.log("Apartado 3");
                    flag = true;
                    console.log(mySet);
                    for(let id of mySet){
                        let div = document.getElementById(`sit-${id}`);
                        div.classList.remove('white');
                        div.classList.add('red');
                    }
                    
                }
            }    
        }
        if(flag == false){
            console.log("Apartado 2");
            mySet.clear();
            console.log(mySet);
            alert("No hay suficientes asientos juntos");
        }
        
    }
   
}