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

  for (let a = 0; a < pixels.length; a++) {
    for(let b = 0; b < pixels[a].length; b++) {
      pixels[a][b][1] = 0;
      pixels[a][b][2] = 0;
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

  for (let a = 0; a < pixels.length; a++) {
    for(let b = 0; b < pixels[a].length; b++) {
      pixels[a][b][0] = 0;
      pixels[a][b][2] = 0;
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

  for (let a = 0; a < pixels.length; a++) {
    for(let b = 0; b < pixels[a].length; b++) {
      pixels[a][b][0] = 0;
      pixels[a][b][1] = 0;
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

  for (let a = 0; a < pixels.length; a++) {
    for(let b = 0; b < pixels[a].length; b++) {

      let red = pixels[a][b][0];
      let green = pixels[a][b][1];
      let blue = pixels[a][b][2];

      let grey = Math.round((red + green + blue) / 3);

      pixels[a][b][0] = grey;
      pixels[a][b][1] = grey;
      pixels[a][b][2] = grey;
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

  for (let a = 0; a < pixels.length; a++) {
    for(let b = 0; b < pixels[a].length; b++) {

      let red = pixels[a][b][0];
      let green = pixels[a][b][1];
      let blue = pixels[a][b][2];

      let grey = (red + green + blue) / 3;

      let color;
      if (grey < 128) {
        color = 0; // Negro
      } else {
        color = 255; // Blanco
      }

      pixels[a][b][0] = color;
      pixels[a][b][1] = color;
      pixels[a][b][2] = color;
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
  let outputPath = 'output/tucan_scale_down.jpg';
  let pixels = handler.getPixels();

  let originalHeight = pixels.length;
  let originalWidth = pixels[0].length;

  let newHeight = Math.floor(originalHeight / 2);
  let newWidth = Math.floor(originalWidth / 2);
  let scaledPixels = [];

  for (let y = 0; y < originalHeight; y += 2) {
    let newRow = [];

    for (let x = 0; x < originalWidth; x += 2) {
      if (y < originalHeight && x < originalWidth) {
        newRow.push([
            pixels[y][x][0],
            pixels[y][x][1],
            pixels[y][x][2]
        ]);
      }
    }

    if (newRow.length > 0) {
      scaledPixels.push(newRow);
    }
  }

  handler.savePixels(scaledPixels, outputPath, newHeight, newWidth);
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
  let outputPath = 'output/tucan_dimed.jpg';
  let pixels = handler.getPixels();

  for (let a = 0; a < pixels.length; a++) {
    for (let b = 0; b < pixels[a].length; b++) {
      pixels[a][b][0] = Math.max(0, Math.min(255, pixels[a][b][0] / dimFactor));
      pixels[a][b][1] = Math.max(0, Math.min(255, pixels[a][b][1] / dimFactor));
      pixels[a][b][2] = Math.max(0, Math.min(255, pixels[a][b][2] / dimFactor));
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

  for (let a = 0; a < pixels.length; a++) {
    for (let b = 0; b < pixels[a].length; b++) {
      pixels[a][b][0] = 255 - pixels[a][b][0];
      pixels[a][b][1] = 255 - pixels[a][b][1];
      pixels[a][b][2] = 255 - pixels[a][b][2];
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

  let height = catPixels.length;
  let width = catPixels[0].length;

  let pixels = [];

  for (let y = 0; y < height; y++) {
    let row = [];
    for (let x = 0; x < width; x++) {
      let catPixel = catPixels[y][x];
      let dogPixel = dogPixels[y][x];

      let red = alphaFirst * catPixel[0] + alphaSecond * dogPixel[0];
      let green = alphaFirst * catPixel[1] + alphaSecond * dogPixel[1];
      let blue = alphaFirst * catPixel[2] + alphaSecond * dogPixel[2];

      red = red > 255 ? 255 : (red < 0 ? 0 : red);
      green = green > 255 ? 255 : (green < 0 ? 0 : green);
      blue = blue > 255 ? 255 : (blue < 0 ? 0 : blue);

      row.push([red, green, blue]);
    }
    pixels.push(row);
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
let optionN = 1;

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