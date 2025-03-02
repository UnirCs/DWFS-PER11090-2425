// Definir el tamaño de la matriz de butacas
        const N = 10; // Número de filas y columnas
        let butacas = []; // Ahora será usado en todo el código

        document.addEventListener("DOMContentLoaded", function() {
            const seatsContainer = document.getElementById("seatsContainer");
            const totalSeats = N * N;
            const occupiedSeats = Math.floor(totalSeats * 0.2); // 20% ocupados

            // Generar asientos y asignar ocupación aleatoria
            let seatsArray = Array(totalSeats).fill("free").map((seat, index) => {
                return { id: index + 1, estado: false }; // estado false => libre
            });

            // Asignar 20% de butacas como ocupadas
            let occupiedCount = 0;
            while (occupiedCount < occupiedSeats) {
                const randomIndex = Math.floor(Math.random() * totalSeats);
                if (!seatsArray[randomIndex].estado) {
                    seatsArray[randomIndex].estado = true; // Ocupar butaca
                    occupiedCount++;
                }
            }

            // Convertir seatsArray en matriz 10x10
            for (let i = 0; i < N; i++) {
                butacas[i] = [];
                for (let j = 0; j < N; j++) {
                    butacas[i][j] = seatsArray[i * N + j];
                }
            }

            // Crear los elementos de asiento en el DOM
            butacas.flat().forEach(seat => {
                const seatElement = document.createElement("div");
                seatElement.classList.add("seat");
                seatElement.id = `seat-${seat.id}`;
                if (seat.estado) {
                    seatElement.classList.add("occupied");
                }
                seatElement.innerText = seat.id;
                seatsContainer.appendChild(seatElement);
            });
        });

        function confirmSeats() {
            const numSeats = parseInt(document.getElementById("numSeats").value);
            const resultado = suggest(numSeats);

            if (resultado.length > 0) {
                alert(`Asientos asignados: ${resultado.map(s => s.id).join(", ")}`);
                resultado.forEach(seat => {
                    const seatElement = document.getElementById(`seat-${seat.id}`);
                    seatElement.classList.add("selected");
                });
            } else {
                alert("No se encontraron suficientes asientos contiguos.");
            }
        }

        function suggest(numAsientos) {
            let asientos = [];
            let cont = 0;
            let encontrado = false;

            if (numAsientos > N || numAsientos <= 0) {
                console.log("Número de asientos inválido");
                return asientos;
            }

            for (let i = N - 1; i >= 0; i--) {
                cont = 0;
                if (!encontrado) {
                    asientos = [];
                }

                for (let j = 0; j < N; j++) {
                    if (!encontrado) {
                        if (!butacas[i][j].estado) {
                            asientos.push(butacas[i][j]);
                            cont++;

                            if (cont === numAsientos) {
                                encontrado = true;
                            }
                        } else {
                            cont = 0;
                            asientos = [];
                        }
                    }
                }
            }

            if (encontrado) {
                asientos.forEach(seat => seat.estado = true); // Marcar como ocupados
            } else {
                console.log("No hay suficientes asientos contiguos disponibles.");
                asientos = [];
            }

            console.log(asientos);
            return asientos;
        }