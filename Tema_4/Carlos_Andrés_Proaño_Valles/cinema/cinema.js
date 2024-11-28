//Verificar la carga del html
window.onload = (event) => {
  // Definir el número de butacas del cine
  let selector = document.getElementById("asientos");
  let sillas = document.getElementsByClassName("silla");
  let N = sillas.length;
  let fyc = 7;

  // Función para inicializar la matriz de butacas
  function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)

    for (let i = 0; i < N; i++) {
      sillas[i].classList.remove("silla--active");
      sillas[i].setAttribute("id", idContador++)
    }
    selector.setAttribute("type", "number");
    selector.min = 1;
  }

  //Inicializar las butacas
  setup()

  //Selecionar Asientos
  function suggest() {
    const nSeleccion = selector.value;
    let bOcupadas = 0;
    let bLibres = 0;
    let seleccion = new Set();
    if (nSeleccion > fyc) {
      for (let i = 0; i < N; i++) {
        sillas[i].classList.remove("silla--active");
      }
    }
    else {
      for (let i = fyc - 1; i >= 0; i--) {
        for (let j = 0; j < fyc; j++) {
          sillas[i * fyc + j].classList.remove("silla--active");
          if (sillas[i * fyc + j].classList.length === 1) {
            bLibres++;
          }
          else
            bOcupadas++;
        }
        for (let j = 0; j < fyc; j++) {
          if (seleccion.size < nSeleccion && nSeleccion <= bLibres) {
            document.getElementById(sillas[i * fyc + j].id).classList.add("silla--active");
            seleccion.add(sillas[i * fyc + j].id);
          }
        }
        bOcupadas = 0;
        bLibres = 0;
      }
    }
    console.log(seleccion);
  }

  selector.addEventListener("input", suggest);
}
