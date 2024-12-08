async function getJoke() {
  let url = "https://api.chucknorris.io/jokes/random";
  let fetchResponse = await fetch(url);
  let json = await fetchResponse.json();
  let joke = json.value;
  document.getElementById("joke").innerHTML = joke;
}