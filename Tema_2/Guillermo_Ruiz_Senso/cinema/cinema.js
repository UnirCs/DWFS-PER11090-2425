const buts = 10;

function setup() {
    let id = 1;
    let butacas = [];

    for (let x = 0; x < buts; x++) {
        let fila = [];
        for (let z = 0; z < buts; z++) {
            fila.push({
                id: id++,
                estado: Math.random() < 0.3 
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

let butacas = setup();

function suggest(numButs) {
    if (numButs <= 0 || numButs > buts) return new Set();

    for (let i = buts - 1; i >= 0; i--) {
        let consecutiveButs = [];
        for (let j = 0; j < buts; j++) {
            if (!butacas[i][j].estado) {
                consecutiveButs.push(butacas[i][j].id);
                if (consecutiveButs.length === numButs) {
                    return new Set(consecutiveButs); 
                }
            } else {
                consecutiveButs = [];
            }
        }
    }

    return new Set();
}