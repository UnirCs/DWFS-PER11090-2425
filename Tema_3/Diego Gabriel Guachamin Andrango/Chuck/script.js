function SendRequest() {
  (async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const json = await response.json();
    document.getElementById("placeholder").innerHTML = json.value;
  })()
}