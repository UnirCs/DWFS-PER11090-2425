// Representación de la sala de cine como una matriz (5 filas x 10 columnas)
const salaCine = [
    [
        { id: 1, estado: false }, { id: 2, estado: false }, { id: 3, estado: true }, { id: 4, estado: false }, { id: 5, estado: false },
        { id: 6, estado: false }, { id: 7, estado: false }, { id: 8, estado: false }, { id: 9, estado: false }, { id: 10, estado: false }
    ],
    [
        { id: 11, estado: false }, { id: 12, estado: true }, { id: 13, estado: false }, { id: 14, estado: false }, { id: 15, estado: false },
        { id: 16, estado: false }, { id: 17, estado: false }, { id: 18, estado: false }, { id: 19, estado: false }, { id: 20, estado: false }
    ],
    [
        { id: 21, estado: false }, { id: 22, estado: true }, { id: 23, estado: true }, { id: 24, estado: false }, { id: 25, estado: false },
        { id: 26, estado: false }, { id: 27, estado: false }, { id: 28, estado: false }, { id: 29, estado: false }, { id: 30, estado: false }
    ],
    [
        { id: 31, estado: false }, { id: 32, estado: false }, { id: 33, estado: false }, { id: 34, estado: false }, { id: 35, estado: false },
        { id: 36, estado: false }, { id: 37, estado: false }, { id: 38, estado: false }, { id: 39, estado: false }, { id: 40, estado: false }
    ],
    [
        { id: 41, estado: true }, { id: 42, estado: false }, { id: 43, estado: false }, { id: 44, estado: false }, { id: 45, estado: false },
        { id: 46, estado: false }, { id: 47, estado: false }, { id: 48, estado: false }, { id: 49, estado: false }, { id: 50, estado: false }
    ]
];

// Función para sugiere asientos
function suggest(asientosSolicitados) {
    const filas = salaCine.length;
    const columnas = salaCine[0].length;

    // Verificamos si el número de asientos solicitados es mayor que la capacidad de una fila
    if (asientosSolicitados > columnas) return new Set();

    // Iteramos desde la fila más lejana (última fila) hacia la más cercana (primera fila)
    for (let fila = filas - 1; fila >= 0; fila--) {
        let asientosJuntos = [];
        for (let columna = 0; columna < columnas; columna++) {
            const asiento = salaCine[fila][columna];
            if (!asiento.estado) {
                asientosJuntos.push(asiento.id);
                // Verificamos si encontramos suficientes asientos juntos
                if (asientosJuntos.length === asientosSolicitados) {
                    return new Set(asientosJuntos);
                }
            } else {
                // Si encontramos un asiento ocupado, reiniciamos la lista
                asientosJuntos = [];
            }
        }
    }
    // Si no se encuentran suficientes asientos juntos, devolvera un conjunto vacío
    return new Set();
}

// Ejemplos de uso
console.log(Array.from(suggest(4))); // Intenta reservar 4 asientos (debería devolver algo como [34, 35, 36, 37])
console.log(Array.from(suggest(2))); // Intenta reservar 2 asientos (debería devolver algo como [42, 43])
console.log(Array.from(suggest(11))); // Intenta reservar 11 asientos (debería devolver un set vacío [])
