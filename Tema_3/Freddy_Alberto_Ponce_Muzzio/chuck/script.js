async function generarChiste() {
    let url = 'https://api.chucknorris.io/jokes/random'
    let fetchResponse = await fetch(url)
    let response = await fetchResponse.json()
    return response.value
}

document.addEventListener("DOMContentLoaded", () => {
    buttonElement = document.querySelector("button");
    buttonElement.addEventListener("click", async () => {
        let chisteContainer = document.getElementById('chiste')
        chisteContainer.innerHTML = await generarChiste()
})
})