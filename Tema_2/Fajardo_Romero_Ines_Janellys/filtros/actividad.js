const ImageHandler = require('./ImageHandler.js')


let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);

function generarPixel(i, j) {
    if ((i + j) % 2 === 0) { // Si la suma de la fila y la columna es par....
        return [255, 255, 255]; // Blanco
    } else {
        return [0, 0, 0]; // Negro
    }
}

/**
 * Ejemplo de construcción de una imagen
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
            console.log("Columna:" + j);
            let pixel = generarPixel(i, j);  // Usamos la función para obtener el píxel
            console.log("Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j);
            nuevaFila.push(pixel);
        }
        console.log(nuevaFila);
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
    let valor = 0;

    let filaPixel = [];
    for(let pixelFila of pixels){
        let columnaPixel = [];
        for(let pixelColumna of pixelFila){
            columnaPixel.push([pixelColumna[0], valor, valor]);
        }
        filaPixel.push(columnaPixel);
    }
    handler.savePixels(filaPixel, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de verdes.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
    let outputPath = 'output/tucan_green.jpg';
    let pixelsG = handler.getPixels();
    let valor = 0;

    let filaPixel = [];
    for(let pixelFila of pixelsG){
        let columnaPixel = [];
        for(let pixelColumna of pixelFila){
            columnaPixel.push([valor, pixelColumna[1], valor]);
        }
        filaPixel.push(columnaPixel);
    }

    handler.savePixels(filaPixel, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter() {
    let outputPath = 'output/tucan_blue.jpg';
    let pixelsB = handler.getPixels();
    let valor = 0;

    let filaPixel = [];
    for(let pixelFila of pixelsB){
        let columnaPixel = [];
        for(let pixelColumna of pixelFila){
            columnaPixel.push([valor, valor, pixelColumna[2]]);
        }
        filaPixel.push(columnaPixel);
    }

    handler.savePixels(filaPixel, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en escala de grises.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * asignarle a cada canal de RGB esa media.
 *
 * Es decir, si un pixel tiene el valor [100, 120, 200], su media es 140 y, por lo tanto,
 * lo debemos transformar en el pixel [140, 140, 140].
 */
function greyConverter() {
    let outputPath = 'output/tucan_grey.jpg';
    let pixelsGr = handler.getPixels();

    let filaPixel = [];
    for(let pixelFila of pixelsGr){
        let columnaPixel = [];
        for(let pixelColumna of pixelFila){
            let suma = pixelColumna.reduce((acumulador, valor) => acumulador + valor, 0);
            let media = suma / pixelColumna.length;
            columnaPixel.push([media, media, media]);
        }
        filaPixel.push(columnaPixel);
    }
    handler.savePixels(filaPixel, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transformar el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter() {
    let outputPath = 'output/tucan_black_and_white.jpg';
    let pixelsBW = handler.getPixels();
    let valorBlanco = 255;
    let valorNegro = 0;

    let filaPixel = [];
    for(let pixelFila of pixelsBW){
        let columnaPixel = [];
        for(let pixelColumna of pixelFila){
            let suma = pixelColumna.reduce((acumulador, valor) => acumulador + valor, 0);
            let media = suma / pixelColumna.length;

            if(media < 128){
                columnaPixel.push([valorNegro, valorNegro, valorNegro]);
            }else{
                columnaPixel.push([valorBlanco, valorBlanco, valorBlanco]);
            }
        }
        filaPixel.push(columnaPixel);
    }
    handler.savePixels(filaPixel, outputPath);
}

/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unidamente con los valores de las filas y columnas pares.
 */
function scaleDown() {
    let outputPath = 'output/tucan_scale_down.jpg';
    let pixels = handler.getPixels();

    let filaPar = [];

    for (let fila = 0; fila < pixels.length; fila += 2) {
        let columnPar = [];
        for (let column = 0; column < pixels[fila].length; column += 2) {
            columnPar.push(pixels[fila][column]);
        }
        filaPar.push(columnPar);
    }
    pixels = filaPar;
    handler.savePixels(pixels, outputPath, handler.getShape()[0] / 2, handler.getShape()[1] / 2);
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
    let outputPath = 'output/tucan_dimed.jpg';
    let pixelsDim = handler.getPixels();
    let filaPixel = [];

    for(let pixelFila of pixelsDim){
        let columnaPixel = [];
        for(let pixelColumna of pixelFila){
            columnaPixel.push([pixelColumna[0] /dimFactor, pixelColumna[1] /dimFactor , pixelColumna[2] /dimFactor]);
        }
        filaPixel.push(columnaPixel);
    }

    handler.savePixels(filaPixel, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor será [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors() {
    let outputPath = 'output/tucan_inverse.jpg';
    let pixelsIn = handler.getPixels();
    let valor = 255;

    let filaPixel = [];
    for(let pixelFila of pixelsIn){
        let columnaPixel = [];
        for(let pixelColumna of pixelFila){
            columnaPixel.push([valor-pixelColumna[0], valor-pixelColumna[1], valor-pixelColumna[2]]);
        }
        filaPixel.push(columnaPixel);
    }
    handler.savePixels(filaPixel, outputPath);
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

    for (let fila = 0; fila < catPixels.length; fila++) {
        let filaFusionada = [];
        for (let column = 0; column < catPixels[fila].length; column++) {
            let r = (catPixels[fila][column][0] * alphaSecond) + (dogPixels[fila][column][0] * alphaFirst);
            let g = (catPixels[fila][column][1] * alphaSecond) + (dogPixels[fila][column][1] * alphaFirst);
            let b = (catPixels[fila][column][2] * alphaSecond) + (dogPixels[fila][column][2] * alphaFirst);

            filaFusionada.push([r, g, b]);
        }

        pixels.push(filaFusionada);
    }

    dogHandler.savePixels(pixels, outputPath);
}


/**
 * Programa de prueba
 * NO DEBES MODIFICAR ESTAS LÍNEAS DE CÓDIGO
 *
 * Ejecuta el archivo actividad.js tal como se indica en el archivo Readme.md
 * En la carpeta output/ aparecerían los resultados para cada uno de los casos
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
let optionN = 8;

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