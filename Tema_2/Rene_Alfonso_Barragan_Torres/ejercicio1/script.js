const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const imageLoader = document.getElementById('imageLoader');
let imgData;

// Cargar una imagen desde el input
imageLoader.addEventListener('change', (event) => {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      imgData = ctx.getImageData(0, 0, img.width, img.height);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(event.target.files[0]);
});

// Aplicar filtros
function applyFilter(filterType) {
  if (!imgData) {
    alert('Primero sube una imagen.');
    return;
  }

  const pixels = imgData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];     // Red
    const g = pixels[i + 1]; // Green
    const b = pixels[i + 2]; // Blue

    switch (filterType) {
      case 'red':
        pixels[i + 1] = 0; // G = 0
        pixels[i + 2] = 0; // B = 0
        break;
      case 'green':
        pixels[i] = 0;     // R = 0
        pixels[i + 2] = 0; // B = 0
        break;
      case 'blue':
        pixels[i] = 0;     // R = 0
        pixels[i + 1] = 0; // G = 0
        break;
      case 'grey':
        const grey = Math.round((r + g + b) / 3);
        pixels[i] = pixels[i + 1] = pixels[i + 2] = grey;
        break;
      case 'bw':
        const avg = Math.round((r + g + b) / 3);
        const bw = avg < 128 ? 0 : 255;
        pixels[i] = pixels[i + 1] = pixels[i + 2] = bw;
        break;
      case 'invert':
        pixels[i] = 255 - r;     // Invert R
        pixels[i + 1] = 255 - g; // Invert G
        pixels[i + 2] = 255 - b; // Invert B
        break;
    }
  }

  // Actualizar el canvas con los nuevos píxeles
  ctx.putImageData(imgData, 0, 0);
}
