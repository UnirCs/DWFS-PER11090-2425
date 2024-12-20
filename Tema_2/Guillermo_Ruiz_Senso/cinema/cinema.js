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
    let result = new Set();
    let found = false;

    for (let i = buts - 1; i >= 0 && !found; i--) {
        let consecutiveButs = [];
        for (let j = 0; j < buts; j++) {
            if (!butacas[i][j].estado) {
                consecutiveButs.push(butacas[i][j].id);
                if (consecutiveButs.length === numButs) {
                    result = new Set(consecutiveButs); 
                    found = true;
                }
            } else {
                consecutiveButs = [];
            }
        }
    }

    return result;
}
