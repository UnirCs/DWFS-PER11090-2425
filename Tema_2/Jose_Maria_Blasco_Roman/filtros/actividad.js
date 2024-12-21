const ImageHandler = require('./ImageHandler.js')


let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);


/**
 * Ejemplo de construccion de una imagen
 */
function ejemplo() {

  let outputPath = 'output/ejemplo.jpg';
  let pixeles = [];
  let filas = 2;
  let columnas = 2;
  for (let i = 0; i < filas; i++) {
    let nuevaFila = [];
    console.log("Fila: " + i);
    for (let j = 0; j < columnas; j++) {
      console.log("Columna:" + j)
      let pixel = [0, 0, 0]; // R G B -> Red Green Blue -> Rojo Verde Azul
      if ((i + j) % 2 === 0) { // Si la suma de la fila y la columna es par....
        pixel = [255, 255, 255];
      }
      console.log("Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j)
      nuevaFila.push(pixel);
    }
    console.log(nuevaFila)
    pixeles.push(nuevaFila);
  }
  console.log(pixeles);
  handler.savePixels(pixeles, outputPath, filas, columnas);
}

/**
 * Esta función debe transformar una imagen en escala de rojos.
 *
 * Una forma de conseguirlo es simplemente poner los canales G y B a 0 para cada pixel.
 */
function redConverter() {
  let outputPath = 'output/tucan_red.jpg';
  let pixels = handler.getPixels();

  for(let row = 0; row < pixels.length; row++) {
    for(let col = 0; col < pixels[row].length; col++) {
      pixels[row][col][1] = 0;
      pixels[row][col][2] = 0;
    }
  }


  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de verdes.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
  let outputPath = 'output/tucan_green.jpg';
  let pixels = handler.getPixels();

  for(let row = 0; row < pixels.length; row++) {
    for(let col = 0; col < pixels[row].length; col++) {
      pixels[row][col][0] = 0;
      pixels[row][col][2] = 0;
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter() {
  let outputPath = 'output/tucan_blue.jpg';
  let pixels = handler.getPixels();

  for(let row = 0; row < pixels.length; row++) {
    for(let col = 0; col < pixels[row].length; col++) {
      pixels[row][col][0] = 0;
      pixels[row][col][1] = 0;
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en escala de grises.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * asignarle a cada canal de RGB esa media.
 *
 * Es decir, si un pixel tiene el valor [100, 120, 200], su media es 140 y por lo tanto
 * lo debemos transformar en el pixel [140, 140, 140].
 */
function greyConverter() {
  let outputPath = 'output/tucan_grey.jpg';
  let pixels = handler.getPixels();


  for (let row = 0; row < pixels.length; row++) {
    for (let col = 0; col < pixels[row].length; col++) {
      let r = pixels[row][col][0];
      let g = pixels[row][col][1];
      let b = pixels[row][col][2];

      let average = Math.round((r + g + b) / 3);

      pixels[row][col][0] = average;
      pixels[row][col][1] = average;
      pixels[row][col][2] = average;
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter() {
  let outputPath = 'output/tucan_black_and_white.jpg';
  let pixels = handler.getPixels();


  for (let row = 0; row < pixels.length; row++) {
    for (let col = 0; col < pixels[row].length; col++) {
      let r = pixels[row][col][0];
      let g = pixels[row][col][1];
      let b = pixels[row][col][2];
      let average = Math.round((r + g + b) / 3);
      let value = average <= 128 ? 0 : 255;

      pixels[row][col][0] = value;
      pixels[row][col][1] = value;
      pixels[row][col][2] = value;
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
 */
function scaleDown() {
  let outputPath = 'output/dog_scale_down.jpg';
  let pixels = handler.getPixels();

  for (let fila = 0; fila < pixels.length; fila += 2) {
    let nuevaFila = [];
    for (let columna = 0; columna < pixels[fila].length; columna += 2) {
      nuevaFila.push(pixels[fila][columna]);
    }
    pixels.push(nuevaFila);
  }

  handler.savePixels(pixels, outputPath, handler.getShape()[0] / 2, handler.getShape()[1] / 2);
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
  let outputPath = 'output/tucan_dimed.jpg';
  let pixels = handler.getPixels();

  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      pixels[fila][columna] = pixels[fila][columna].map(valor => Math.round(valor / dimFactor));
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors() {
  let outputPath = 'output/tucan_inverse.jpg';
  let pixels = handler.getPixels();

  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      pixels[fila][columna] = pixels[fila][columna].map(valor => 255 - valor);
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * merge - Junta dos imagenes con cierto factor de fusion
 * Una forma de conseguirlo es sumar el valor de cada canal de cada píxel de cada imagen, habiéndolo multiplicado antes por el factor de fusión correspondiente.
 * @param alphaFirst - Factor de fusion para la primera imagen
 * @param alphaSecond - Factor de fusion para la segunda imagen
 */
function merge(alphaFirst, alphaSecond) {
  let catHandler = new ImageHandler('input/cat.jpg');
  let dogHandler = new ImageHandler('input/dog.jpg');
  let outputPath = 'output/merged.jpg';

  let catPixels = catHandler.getPixels();
  let dogPixels = dogHandler.getPixels();

  let pixels = [];


  for (let row = 0; row < catPixels.length; row++) {
    let newRow = [];
    for (let col = 0; col < catPixels[row].length; col++) {

      let catPixel = catPixels[row][col];
      let dogPixel = dogPixels[row][col];

      let r = Math.round(catPixel[0] * alphaFirst + dogPixel[0] * alphaSecond);
      let g = Math.round(catPixel[1] * alphaFirst + dogPixel[1] * alphaSecond);
      let b = Math.round(catPixel[2] * alphaFirst + dogPixel[2] * alphaSecond);

      newRow.push([r, g, b]);
    }

    pixels.push(newRow);
  }

  dogHandler.savePixels(pixels, outputPath);
}


/**
 * Programa de prueba
 * NO DEBES MODIFICAR ESTAS LÍNEAS DE CÓDIGO
 *
 * Ejecuta el archivo actividad.js tal como se indica en el archivo Readme.md
 * En la carpeta output/ apareceran los resultados para cada uno de los casos
 *
 *     Ejecutar ejemplo: 0
 *     Conversor a rojos: 1
 *     Conversor a verdes: 2
 *     Conversor a azules: 3
 *     Conversor a grises: 4
 *     Conversor blanco y negro: 5
 *     Redimensionar: 6
 *     Reducir brillo: 7
 *     Negativo: 8
 *     Fusion de imagenes: 9
 */
let optionN = 9;

switch (optionN) {
  case 1: redConverter(); break;
  case 2: greenConverter(); break;
  case 3: blueConverter(); break;
  case 4: greyConverter(); break;
  case 5: blackAndWhiteConverter(); break;
  case 6: scaleDown(); break;
  case 7: dimBrightness(2); break;
  case 8: invertColors(); break;
  case 9: merge(0.3, 0.7); break;
  default: ejemplo();
}