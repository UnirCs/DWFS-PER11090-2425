
document.addEventListener("DOMContentLoaded", () => {

    butacas = document.querySelectorAll(".fila__butaca, .fila__butaca--ocupado, .fila__butaca--seleccionada").forEach((butaca, index) => {
        butaca.id = index + 1; // Se asigna un id a cada butaca
    });

});




