const url = 'https://api.chucknorris.io/jokes/random';

function getJoke() {
    let joke = document.getElementById('id_joke');  

    fetch(url)
    .then(response => response.json())
    .then(json => joke.innerHTML = json.value) 
}
