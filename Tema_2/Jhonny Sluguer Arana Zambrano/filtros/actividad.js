const ImageHandler = require('./ImageHandler.js');

let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);

/**
 * Conversor a escala de rojo
 */
function redConverter() {
  let outputPath = 'output/tucan_red.jpg';
  let pixels = handler.getPixels();

  pixels.forEach(fila => fila.forEach(pixel => {
    pixel[1] = 0; // Eliminar el canal G
    pixel[2] = 0; // Eliminar el canal B
  }));

  handler.savePixels(pixels, outputPath);
  console.log(`Imagen roja guardada en: ${outputPath}`);
}

/**
 * Conversor a escala de verde
 */
function greenConverter() {
  let outputPath = 'output/tucan_green.jpg';
  let pixels = handler.getPixels();

  pixels.forEach(fila => fila.forEach(pixel => {
    pixel[0] = 0; // Eliminar el canal R
    pixel[2] = 0; // Eliminar el canal B
  }));

  handler.savePixels(pixels, outputPath);
  console.log(`Imagen verde guardada en: ${outputPath}`);
}

/**
 * Conversor a escala de azul
 */
function blueConverter() {
  let outputPath = 'output/tucan_blue.jpg';
  let pixels = handler.getPixels();

  pixels.forEach(fila => fila.forEach(pixel => {
    pixel[0] = 0; // Eliminar el canal R
    pixel[1] = 0; // Eliminar el canal G
  }));

  handler.savePixels(pixels, outputPath);
  console.log(`Imagen azul guardada en: ${outputPath}`);
}

/**
 * Conversor a escala de grises
 */
function greyConverter() {
  let outputPath = 'output/tucan_grey.jpg';
  let pixels = handler.getPixels();

  pixels.forEach(fila => fila.forEach(pixel => {
    let grey = Math.round((pixel[0] + pixel[1] + pixel[2]) / 3);
    pixel[0] = grey;
    pixel[1] = grey;
    pixel[2] = grey;
  }));

  handler.savePixels(pixels, outputPath);
  console.log(`Imagen gris guardada en: ${outputPath}`);
}

/**
 * Conversor a blanco y negro
 */
function blackAndWhiteConverter() {
  let outputPath = 'output/tucan_black_and_white.jpg';
  let pixels = handler.getPixels();

  pixels.forEach(fila => fila.forEach(pixel => {
    let grey = Math.round((pixel[0] + pixel[1] + pixel[2]) / 3);
    let value = grey < 128 ? 0 : 255;
    pixel[0] = value;
    pixel[1] = value;
    pixel[2] = value;
  }));

  handler.savePixels(pixels, outputPath);
  console.log(`Imagen blanco y negro guardada en: ${outputPath}`);
}

/**
 * Programa principal
 */
let optionN = 1; // Cambia el valor según la función que quieras ejecutar

switch (optionN) {
  case 1: redConverter(); break;
  case 2: greenConverter(); break;
  case 3: blueConverter(); break;
  case 4: greyConverter(); break;
  case 5: blackAndWhiteConverter(); break;
  default: console.log("Opción no válida.");
}
