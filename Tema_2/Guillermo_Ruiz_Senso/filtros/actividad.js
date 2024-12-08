const ImageHandler = require('./ImageHandler.js')


let path = 'input/dog.jpg';
let handler = new ImageHandler(path);

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
      let pixel = [0, 0, 0];
      if ((i + j) % 2 === 0) {
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

function redConverter() {
  let outputPath = 'output/dog_red.jpg';
  let pixels = handler.getPixels();

  for(let fila = 0; fila < pixels.length; fila++) {
    for(let columna = 0; columna < pixels[fila].length; columna++) {
      pixels[fila][columna][1] = 0;
      pixels[fila][columna][2] = 0;
    }
  }

  handler.savePixels(pixels, outputPath);
}

function greenConverter() {
  let outputPath = 'output/dog_green.jpg';
  let pixels = handler.getPixels();

  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      pixels[fila][columna][0] = 0; 
      pixels[fila][columna][2] = 0;
    }
  }
  

  handler.savePixels(pixels, outputPath);
}

function blueConverter() {
  let outputPath = 'output/dog_blue.jpg';
  let pixels = handler.getPixels();

  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      pixels[fila][columna][0] = 0;
      pixels[fila][columna][1] = 0;
    }
  }
  

  handler.savePixels(pixels, outputPath);
}

function greyConverter() {
  let outputPath = 'output/dog_grey.jpg';
  let pixels = handler.getPixels();

  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      let promedio = Math.round(
        (pixels[fila][columna][0] + pixels[fila][columna][1] + pixels[fila][columna][2]) / 3
      );
      pixels[fila][columna] = [promedio, promedio, promedio];
    }
  }  

  handler.savePixels(pixels, outputPath);
}

function blackAndWhiteConverter() {
  let outputPath = 'output/dog_black_and_white.jpg';
  let pixels = handler.getPixels();

  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      let promedio = Math.round(
        (pixels[fila][columna][0] + pixels[fila][columna][1] + pixels[fila][columna][2]) / 3
      );
      pixels[fila][columna] = promedio < 128 ? [0, 0, 0] : [255, 255, 255];
    }
  }
  

  handler.savePixels(pixels, outputPath);
}

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

function dimBrightness(dimFactor) {
  let outputPath = 'output/dog_dimed.jpg';
  let pixels = handler.getPixels();

  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      pixels[fila][columna] = pixels[fila][columna].map(valor => Math.round(valor / dimFactor));
    }
  }  

  handler.savePixels(pixels, outputPath);
}

function invertColors() {
  let outputPath = 'output/dog_inverse.jpg';
  let pixels = handler.getPixels();

  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      pixels[fila][columna] = pixels[fila][columna].map(valor => 255 - valor);
    }
  }
  

  handler.savePixels(pixels, outputPath);
}

function merge(alphaFirst, alphaSecond) {
  let catHandler = new ImageHandler('input/cat.jpg');
  let dogHandler = new ImageHandler('input/dog.jpg');
  let outputPath = 'output/merged.jpg';

  let catPixels = catHandler.getPixels();
  let dogPixels = dogHandler.getPixels();

  let pixels = [];

  for (let fila = 0; fila < catPixels.length; fila++) {
    let nuevaFila = [];
    for (let columna = 0; columna < catPixels[fila].length; columna++) {
      let nuevoPixel = catPixels[fila][columna].map((valor, idx) => 
        Math.round(valor * alphaFirst + dogPixels[fila][columna][idx] * alphaSecond)
      );
      nuevaFila.push(nuevoPixel);
    }
    pixels.push(nuevaFila);
  }
  

  dogHandler.savePixels(pixels, outputPath);
}

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