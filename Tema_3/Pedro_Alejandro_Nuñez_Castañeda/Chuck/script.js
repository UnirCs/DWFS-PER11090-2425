async function getJokeFetch() {
  let url = "https://api.chucknorris.io/jokes/random";
  let fetchResponse = await fetch(url);
  let json = await fetchResponse.json();
  let joke = json.value;
  // console.log("joke sincrono: " + joke);
  return joke;
}

async function getJoke(){
  let joke = await getJokeFetch();
  document.getElementById("ptext").innerHTML = joke
}
