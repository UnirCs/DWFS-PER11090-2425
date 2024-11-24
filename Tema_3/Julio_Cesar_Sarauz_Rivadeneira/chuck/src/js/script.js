function ConsultarChiste(){
  const ruta = "https://api.chucknorris.io/jokes/random";
  fetch(ruta).then(async resApi => {
    const respuestaApi = await resApi.json();
    document.getElementById("txtsalida").innerHTML = "\""+respuestaApi.value+"\"";
  } ).catch(err => {
    document.getElementById("txtsalida").innerHTML = "Error: "+err;
  });
}