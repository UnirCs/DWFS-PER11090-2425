function fetchSincrono() {
    let url = "https://api.chucknorris.io/jokes/random";
    
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let chucknorris = json.value;
            console.log("Chuck Norris joke: " + chucknorris);
            var elem = document.getElementById("chiste");
            elem.textContent = chucknorris;
        })
        .catch(error => console.error('Error:', error));
}