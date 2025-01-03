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

  //Aqui tu codigo
   // Convertir a escala de rojos 
   for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < pixels[i].length; j++) {
      let pixel = pixels[i][j];// Obténer el array de cada pixel 
      pixel[1] = 0; // Verde a 0
      pixel[2] = 0; // Azul a 0
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
  console.log("entre aqui")
  let outputPath = 'output/tucan_green.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  // Convertir a escala de verdes
  for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < pixels[i].length; j++) {
      let pixel = pixels[i][j];// Obténer el array de cada pixel 
      pixel[0] = 0; // Verde a 0
      pixel[2] = 0; // Azul a 0
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

  //Aqui tu codigo
  // Convertir a escala de azules
  for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < pixels[i].length; j++) {
      let pixel = pixels[i][j];// Obténer el array de cada pixel 
      pixel[0] = 0; // Verde a 0
      pixel[1] = 0; // Azul a 0
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
  let pixels = handler.getPixels(); // Obtén los píxeles de la imagen

  // Recorre cada píxel
  // Convertir a escala de grises
  for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < pixels[i].length; j++) {
      let pixel = pixels[i][j]; // Obténer el array de cada pixel 
      
      // Calcular la media de los tres canales
      let media = (pixel[0] + pixel[1] + pixel[2]) / 3;
      
      // Asignar el valor de la media a los tres canales del píxel para convertirlo a gris
      pixel[0] = media; // Rojo
      pixel[1] = media; // Verde
      pixel[2] = media; // Azul
    }
  }
  
  // Guarda la imagen con los píxeles modificados
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
  let pixels = handler.getPixels(); // Obtén los píxeles de la imagen

  // Recorre cada píxel
  for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < pixels[i].length; j++) {
      let pixel = pixels[i][j]; // Obténer el array de cada pixel 
      
      // Calcula la media de los tres canales
      let media = (pixel[0] + pixel[1] + pixel[2]) / 3;
      
      // Si la media es menor que 128, el píxel se convierte en negro
      if (media < 128) {
        pixel[0] = 0;   // Rojo a 0
        pixel[1] = 0;   // Verde a 0
        pixel[2] = 0;   // Azul a 0
      } else {
        pixel[0] = 255; // Rojo a 255
        pixel[1] = 255; // Verde a 255
        pixel[2] = 255; // Azul a 255
      }
    }
  }
  
  // Guarda la imagen con los píxeles modificados
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
  let pixels = handler.getPixels();  // Obtener los píxeles de la imagen original
  let shape = handler.getShape();   // devuelve un array con las dos dimensiones (alto y ancho)
  let newHeight = Math.floor(shape[0] / 2); // mitad del alto de la imagen
  let newWidth = Math.floor(shape[1] / 2);  // mitad del ancho de la imagen

  // matriz de píxeles para la imagen reducida
  let newPixels = [];

  // Recorremos las filas y columnas con índices pares
  for (let i = 0; i < shape[0]; i += 2) {
    let newRow = [];
    for (let j = 0; j < shape[1]; j += 2) {
      // Tomamos el píxel en la posición (i, j) de la imagen original
      let pixel = pixels[i][j];
      newRow.push(pixel); // Añadimos el píxel a la nueva fila
    }
    newPixels.push(newRow);  // Añadimos la nueva fila a la nueva matriz de píxeles
  }

  // Guardamos la nueva imagen con los píxeles seleccionados
  handler.savePixels(newPixels, outputPath, newHeight, newWidth);
}


/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
  let outputPath = 'output/tucan_dimed.jpg';
  let pixels = handler.getPixels();  // Obtener los píxeles de la imagen

  // Recorremos cada píxel de la imagen
  for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < pixels[i].length; j++) {
      let pixel = pixels[i][j]; // Obténer el array de cada pixel

      // Reducimos el brillo dividiendo cada componente RGB por el dimFactor
      for (let k = 0; k < pixel.length; k++) {
        pixel[k] = pixel[k] / dimFactor; // dividir cada canal RGB sobre el dimFactor
      }
    }
  }

  // Guardamos la imagen con el brillo reducido
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
  for (let i = 0; i < pixels.length - 1; i++) {
    for (let j = 0; j < pixels[i].length - 1; j++) {
      pixels[i][j][0] = 255 - pixels[i][j][0];
      pixels[i][j][1] = 255 - pixels[i][j][1];
      pixels[i][j][2] = 255 - pixels[i][j][2];
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
  let catHandler = new ImageHandler('cat.jpg'); // Cargar la primera imagen (gato)
  let dogHandler = new ImageHandler('dog.jpg'); // Cargar la segunda imagen (perro)
  let outputPath = 'output/merged.jpg'; // Ruta para guardar la imagen fusionada

  let catPixels = catHandler.getPixels(); // Obtener los píxeles de la imagen del gato
  let dogPixels = dogHandler.getPixels(); // Obtener los píxeles de la imagen del perro

  let pixels = []; // Matriz para almacenar los píxeles fusionados

  // Aseguramos que ambas imágenes tengan el mismo tamaño
  let height = Math.min(catPixels.length, dogPixels.length);
  let width = Math.min(catPixels[0].length, dogPixels[0].length);

  // Fusionamos los píxeles de ambas imágenes
  for (let i = 0; i < height; i++) {
    let row = []; // Nueva fila para la imagen fusionada

    for (let j = 0; j < width; j++) {
      let catPixel = catPixels[i][j]; // Píxel de la imagen del gato
      let dogPixel = dogPixels[i][j]; // Píxel de la imagen del perro

      // Fusionamos los valores RGB de ambos píxeles
      let newPixel = [];
      for (let k = 0; k < 3; k++) {
        // Sumar los valores de cada canal (R, G, B), multiplicados por sus factores
        let fusedValue = Math.round(alphaFirst * catPixel[k] + alphaSecond * dogPixel[k]);
        
        // Aseguramos que el valor esté en el rango [0, 255]
        newPixel.push(Math.max(0, Math.min(255, fusedValue)));
      }

      row.push(newPixel); // Añadimos el píxel fusionado a la fila
    }

    pixels.push(row); // Añadimos la fila fusionada a la matriz final
  }

  // Guardamos la imagen fusionada
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
let optionN = 0;

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




