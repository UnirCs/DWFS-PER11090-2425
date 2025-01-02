const ImageHandler = require('./ImageHandler.js');

let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);

console.log("Verificando ImageHandler...");

// Obtener los píxeles
try {
  let pixels = handler.getPixels();
  console.log("Píxeles cargados correctamente:");
  console.log(pixels.slice(0, 2)); 
} catch (error) {
  console.error("Error al obtener los píxeles:", error);
}

// Guardar la imagen sin modificaciones
try {
  let outputPath = 'output/test_output.jpg';
  handler.savePixels(handler.getPixels(), outputPath);
  console.log("Imagen guardada correctamente en:", outputPath);
} catch (error) {
  console.error("Error al guardar la imagen:", error);
}
