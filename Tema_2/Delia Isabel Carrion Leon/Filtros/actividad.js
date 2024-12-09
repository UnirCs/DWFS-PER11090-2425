//Isabel Carrion 
const ImageHandler = require('./ImageHandler.js')

let path = 'input/cat.jpg';
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
  let outputPath = 'output/catred.jpg';
  let pixels = handler.getPixels();
  let filas = pixels.length;
  let columnas = pixels[0].length;
  let pixeles = []; //nueva imagen
 /* console.log(filas);
  console.log(columnas);*/
  for (let i = 0; i < 10; i++) {
    let nuevaFila = [];
   /* console.log("Fila: " + i);*/
    for (let j = 0; j < 10; j++) {
      /*console.log("Columna:" + j)*/
      let pixel = pixels[i][j]; // RGB actual
      let valor_rojo = pixel[0]; // Canal rojo del píxel original
      let redPixel = [valor_rojo, 0, 0]; // Mantener sólo el canal rojo
      nuevaFila.push(redPixel); // Añadir el píxel rojo a la fila
    }
    pixeles.push(nuevaFila);
  }
  handler.savePixels(pixeles, outputPath,filas,columnas);//se guarda la imagen
}
/**
 * Esta función debe transformar una imagen en escala de verdes.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
  let outputPath = 'output/catgreen.jpg';
  let pixels = handler.getPixels();
  let filas = pixels.length;
  let columnas = pixels[0].length;
  let pixeles = []; //nueva imagen
  for (let i = 0; i < filas; i++) {
    let nuevaFila = [];
    for (let j = 0; j < columnas; j++) {
      let pixel = pixels[i][j]; // RGB actual
      let valor_verde = pixel[0]; // Canal verde del píxel original
      let greenPixel = [0, valor_verde, 0]; // Mantener sólo el canal rojo
      nuevaFila.push(greenPixel); // Añadir el píxel verde a la fila
    }
    pixeles.push(nuevaFila);
  }
  handler.savePixels(pixeles, outputPath,filas,columnas);//se guarda la imagen
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter() {
    let outputPath = 'output/catblue.jpg';
    let pixels = handler.getPixels();
    let filas = pixels.length;
    let columnas = pixels[0].length;
    let pixeles = []; //nueva imagen
    for (let i = 0; i < filas; i++) {
      let nuevaFila = [];
      for (let j = 0; j < columnas; j++) {
        let pixel = pixels[i][j]; // RGB actual
        let valor_azul = pixel[0]; // Canal azul del píxel original
        let bluePixel = [0, 0, valor_azul]; // Mantener sólo el canal azul
        nuevaFila.push(bluePixel); // Añadir el píxel azul a la fila
      }
      pixeles.push(nuevaFila);
    }
    handler.savePixels(pixeles, outputPath,filas,columnas);//se guarda la imagen
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
    let outputPath = 'output/catgray.jpg';
    let pixels = handler.getPixels();
    let filas = pixels.length;
    let columnas = pixels[0].length;
    let pixeles = []; //nueva imagen
    for (let i = 0; i < filas; i++) {
      let nuevaFila = [];
      for (let j = 0; j < columnas; j++) {
        let pixel = pixels[i][j]; // RGB actual
        let grayValue = Math.round(0.299 * pixel[0] + 0.587 * pixel[1] + 0.114 * pixel[2]); // Fórmula estándar
        let grayPixel = [grayValue, grayValue, grayValue];
        nuevaFila.push(grayPixel);
      }
      pixeles.push(nuevaFila);
    }
    handler.savePixels(pixeles, outputPath,filas,columnas);//se guarda la imagen
  }

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter() {
  let outputPath = 'output/catblackandwhite.jpg';
  let pixels = handler.getPixels();
  let filas = pixels.length;
  let columnas = pixels[0].length;
  let pixeles = []; //nueva imagen
  for (let i = 0; i < filas; i++) {
    let nuevaFila = [];
    for (let j = 0; j < columnas; j++) {
      let pixel = pixels[i][j]; // RGB actual
      let brillo = Math.round(0.299 * pixel[0] + 0.587 * pixel[1] + 0.114 * pixel[2]);
      // Asignar blanco o negro según el umbral
      let bwPixel = brillo > 128 ? [255, 255, 255] : [0, 0, 0];
      nuevaFila.push(bwPixel);
    }
    pixeles.push(nuevaFila);
  }
  handler.savePixels(pixeles, outputPath,filas,columnas);//se guarda la imagen
}


/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
 */
function scaleDown() {
  let outputPath = 'output/catreduce.jpg';
  let pixels = handler.getPixels();
  let filas = pixels.length;
  let columnas = pixels[0].length;
   // Crear una nueva matriz ignorando filas y columnas pares
   let reducedPixels = [];
   for (let i = 0; i < filas; i += 2) { // Sólo filas pares
     let nuevaFila = [];
     for (let j = 0; j < columnas; j += 2) { // Sólo columnas pares
       nuevaFila.push(pixels[i][j]); // Usar sólo los píxeles en posiciones pares
     }
     reducedPixels.push(nuevaFila);
    }
  handler.savePixels(reducedPixels, outputPath, handler.getShape()[0] / 2, handler.getShape()[1] / 2);
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
  let outputPath = 'output/catbrillo.jpg';
  let pixels = handler.getPixels();
  let dimmedPixels = [];

  for (let i = 0; i < filas; i++) {
    let nuevaFila = [];
    for (let j = 0; j < columnas; j++) {
      let pixel = pixels[i][j]; // Obtener el píxel original [R, G, B]

      // Reducir el brillo dividiendo cada canal por el dimFactor
      let dimmedPixel = [
        Math.floor(pixel[0] / dimFactor), // Reducir el rojo
        Math.floor(pixel[1] / dimFactor), // Reducir el verde
        Math.floor(pixel[2] / dimFactor)  // Reducir el azul
      ];
      dimmedPixel = dimmedPixel.map(channel => Math.max(0, Math.min(255, channel)));
      nuevaFila.push(dimmedPixel); // Añadir el píxel ajustado a la fila
    }
    dimmedPixels.push(nuevaFila); // Añadir la fila a la matriz
  }
  // Guardar la imagen resultante con brillo reducido
  handler.savePixels(dimmedPixels, outputPath, filas, columnas);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors() {
  let outputPath = 'output/catinvertido.jpg';
  let pixels = handler.getPixels();
  let filas = pixels.length;       // Número de filas
  let columnas = pixels[0].length; // Número de columnas
  let invertedPixels = [];
  for (let i = 0; i < filas; i++) {
    let nuevaFila = [];
    for (let j = 0; j < columnas; j++) {
      let pixel = pixels[i][j]; // Obtener el píxel original [R, G, B]
      // Invertir cada canal de color restándolo de 255
      let invertedPixel = [255 - pixel[0], 255 - pixel[1], 255 - pixel[2]]; // se invierte cada color

      nuevaFila.push(invertedPixel); // Añadir el píxel invertido a la fila
    }
    invertedPixels.push(nuevaFila); // Añadir la fila a la matriz
  }

  // Guardar la imagen resultante con los colores invertidos
  handler.savePixels(invertedPixels, outputPath, filas, columnas);
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

  let filas = Math.min(catPixels.length, dogPixels.length);       // Usar la menor cantidad de filas
  let columnas = Math.min(catPixels[0].length, dogPixels[0].length); // Usar la menor cantidad de columnas
  
  let catPixels = catHandler.getPixels();
  let dogPixels = dogHandler.getPixels();

  let pixels = [];

  for (let i = 0; i < filas; i++) {
    let nuevaFila = [];
    for (let j = 0; j < columnas; j++) {
      let catPixel = catPixels[i][j]; // Píxel del gato [R, G, B]
      let dogPixel = dogPixels[i][j]; // Píxel del perro [R, G, B]

      // Combinar los píxeles usando los factores alpha
      let mergedPixel = [
        Math.round(catPixel[0] * alphaFirst + dogPixel[0] * alphaSecond), // Rojo combinado
        Math.round(catPixel[1] * alphaFirst + dogPixel[1] * alphaSecond), // Verde combinado
        Math.round(catPixel[2] * alphaFirst + dogPixel[2] * alphaSecond)  // Azul combinado
      ];

      // Asegurarnos de que los valores estén en el rango [0, 255]
      mergedPixel = mergedPixel.map(channel => Math.max(0, Math.min(255, channel)));

      nuevaFila.push(mergedPixel);
    }
    pixels.push(nuevaFila);
  }

  // Guardar la imagen combinada
  dogHandler.savePixels(pixels, outputPath, filas, columnas);
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
