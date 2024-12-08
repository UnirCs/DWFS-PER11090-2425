async function getJokeApi() {
  console.log("holitas");
  let url = "https://api.chucknorris.io/jokes/random";
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("joke").innerHTML = data.value;
    });
}
