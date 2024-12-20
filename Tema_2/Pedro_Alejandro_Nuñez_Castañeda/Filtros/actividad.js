const ImageHandler = require('./ImageHandler.js')

let subpath = 'Tema_2/Ejercicios/filtros/'
let path = subpath+'input/tucan.jpg';
let handler = new ImageHandler(path);


/**
 * Ejemplo de construccion de una imagen
 */
function ejemplo() {

  let outputPath = subpath+'output/ejemplo.jpg';
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
  let outputPath = subpath+'output/tucan_red.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      // 0->R rojo,1->G verde,2->B azul
      pixels[fila][columna][1] = 0 //Quitar Verde
      pixels[fila][columna][2] = 0 //Quitar Azul
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
  let outputPath = subpath+'output/tucan_green.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      // 0->R rojo,1->G verde,2->B azul
      pixels[fila][columna][0] = 0 //Quitar Rojo
      pixels[fila][columna][2] = 0 //Quitar Azul
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
  let outputPath = subpath+'output/tucan_blue.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      // 0->R rojo,1->G verde,2->B azul
      pixels[fila][columna][0] = 0 //Quitar Rojo
      pixels[fila][columna][1] = 0 //Quitar Verde
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
  let outputPath = subpath+'output/tucan_grey.jpg';
  let pixels = handler.getPixels();

  //Fórmula de escala de grises (promedio)
  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      let R = pixels[fila][columna][0]
      let G = pixels[fila][columna][1]
      let B = pixels[fila][columna][2]
      let avg = Math.floor((R+G+B)/3)
      // 0->R rojo,1->G verde,2->B azul
      pixels[fila][columna][0] = avg //
      pixels[fila][columna][1] = avg //
      pixels[fila][columna][2] = avg //
      // console.debug("AVG",avg)
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
  let outputPath = subpath+'output/tucan_black_and_white.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      let R = pixels[fila][columna][0]
      let G = pixels[fila][columna][1]
      let B = pixels[fila][columna][2]
      let res = ((R+G+B)/3 > 128 ? 255 : 0) //Si el promedio es mayor a 128 blanco, sino negro
      // 0->R rojo,1->G verde,2->B azul
      pixels[fila][columna][0] = res
      pixels[fila][columna][1] = res
      pixels[fila][columna][2] = res
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
  let outputPath = subpath+'output/tucan_scale_down.jpg';
  let pixels = handler.getPixels();
  let newPixels = []

  //Aqui tu codigo
  for (let fila = 0; fila < pixels.length; fila++) {
    if(fila%2 == 0){
      let nuevafila = []
      for (let columna = 0; columna < pixels[fila].length; columna++) {
        if(columna%2==0){
          let R = pixels[fila][columna][0]
          let G = pixels[fila][columna][1]
          let B = pixels[fila][columna][2]
          nuevafila.push([R,G,B])
        }
      }
      newPixels.push(nuevafila)
    }
  }
  handler.savePixels(newPixels, outputPath,newPixels.length,newPixels[0].length);
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
  let outputPath = subpath+'output/tucan_dimed.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      let R = pixels[fila][columna][0]
      let G = pixels[fila][columna][1]
      let B = pixels[fila][columna][2]
      // 0->R rojo,1->G verde,2->B azul
      pixels[fila][columna][0] = Math.floor(R/dimFactor)
      pixels[fila][columna][1] = Math.floor(G/dimFactor)
      pixels[fila][columna][2] = Math.floor(B/dimFactor)
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
  let outputPath = subpath+'output/tucan_inverse.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  for (let fila = 0; fila < pixels.length; fila++) {
    for (let columna = 0; columna < pixels[fila].length; columna++) {
      let R = pixels[fila][columna][0]
      let G = pixels[fila][columna][1]
      let B = pixels[fila][columna][2]
      let res = ((R+G+B)/3 > 128 ? 255 : 0) //Si el promedio es mayor a 128 blanco, sino negro
      // 0->R rojo,1->G verde,2->B azul
      pixels[fila][columna][0] = 255 - R
      pixels[fila][columna][1] = 255 - G
      pixels[fila][columna][2] = 255 - B
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
  let catHandler = new ImageHandler(subpath+'input/cat.jpg');
  let dogHandler = new ImageHandler(subpath+'input/dog.jpg');
  let outputPath = subpath+'output/merged.jpg';

  let catPixels = catHandler.getPixels();
  let dogPixels = dogHandler.getPixels();
  // console.debug("I1:",catPixels.length,catPixels[0].length);
  // console.debug("I2:",dogPixels.length,dogPixels[0].length);
  

  let pixels = [];

  //Aqui tu codigo
  for (let fila = 0; fila < catPixels.length; fila++) {
    let newLine = []
    for (let columna = 0; columna < catPixels[fila].length; columna++) {
      let Rc = catPixels[fila][columna][0]*alphaSecond
      let Gc = catPixels[fila][columna][1]*alphaSecond
      let Bc = catPixels[fila][columna][2]*alphaSecond
      // Img 2
      let Rd = dogPixels[fila][columna][0]*alphaFirst
      let Gd = dogPixels[fila][columna][1]*alphaFirst
      let Bd = dogPixels[fila][columna][2]*alphaFirst
      // 0->R rojo,1->G verde,2->B azul
      newLine.push([Rc + Rd,Gc + Gd,Bc + Bd])
    }
    pixels.push(newLine)
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