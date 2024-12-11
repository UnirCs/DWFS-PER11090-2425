
  
async function chiste() {

    let url = "https://catfact.ninja/fact";
    let fetchResponse = await fetch(url);
    let json = await fetchResponse.json();
    let fact = json.fact;
    const etiquetaResultado = document.getElementById("resultado");
    etiquetaResultado.textContent = fact;

}