// Definir el tamaño de la matriz de butacas
const N = 7; // Número de filas y columnas

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
                estado: Math.random() < 0.5 // Estado inicial aleatorio
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
//let butacas = setup();

// Imprimir la matriz
//console.log(butacas);


/********************/

function verifica(butacas,num,sala){
    let cont = 0;
    let asientos = [];
    if(num > N){
        asientos = [];
        return asientos;
    }
    for (let i = N-1; i >= 0 && cont < num; i--) {
        for (let j = 0; j < N; j++) {
            if(butacas[i][j].estado == false){
                cont++;
                asientos.push(butacas[i][j].id);
            }else{
                cont = 0;
                asientos = [];
            }
        }
    }
    console.log("Asientos Dispponibles de Sala N° " + sala);
    console.log(asientos);
    return asientos;
}

function paginaLocal() {
    const pass = document.getElementById("pass").value;
    const repass = document.getElementById("repass").value;

    if (pass === "" && repass === "") {
        feedback.textContent = "";
        feedback.className = "";
        return;
    }
    else{
        if (pass === repass) {
            window.location.href = "index.html"; 
        } else {
            feedback.textContent = "Las contraseñas no coinciden.";
            feedback.className = "text-danger"; 
        }
    }
    
}

function validarpass() {
    const pass = document.getElementById("pass").value;
    const repass = document.getElementById("repass").value;
    const feedback = document.getElementById("feedback");

    // Si ambos campos están vacíos, no mostrar mensaje
    if (pass === "" && repass === "") {
        feedback.textContent = "";
        feedback.className = "";
        return;
    }

    // Comparar contraseñas
    if (pass === repass) {
        feedback.textContent = "¡Las contraseñas coinciden!";
        feedback.className = "text-success";
    } else {
        feedback.textContent = "Las contraseñas no coinciden.";
        feedback.className = "text-danger"; 
    }
}

// Inicializar la matriz
function inicia(){
let sala = setup();
verifica(sala,4,1);
}

function selecciona(){
    for (let j = 1; j <= 48; j++) {
        const limpia = document.getElementById(j);
        limpia.className = "asiento";
    }

    const numero = document.getElementById("numero").value;
    
    if (numero >= 7) {
        for (let j = 1; j <= numero ; j++) {
            const asiento = document.getElementById(6+j);
            asiento.className = "asiento ocupado";
        }
    } else {
        for (let j = 1; j <= numero; j++) {
            const asiento = document.getElementById(j);
            asiento.className = "asiento ocupado";
        }
    }

    
 }
    