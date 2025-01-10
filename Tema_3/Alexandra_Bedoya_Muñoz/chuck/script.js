const btnChiste = document.getElementById("btnChiste");
      const txtChisteAPI = document.getElementById("txtChisteAPI");
      async function apiCuckNorris() {
        try {
          const response = await fetch(
            "https://api.chucknorris.io/jokes/random"
          );
          const data = await response.json();
          txtChisteAPI.textContent = data.value; 
        } catch (error) {
          txtChisteAPI.textContent = "Error!!, Inténtalo de nuevo.";
          console.error("Error al obtener el chiste:", error);
        }
      }
      btnChiste.addEventListener("click", apiCuckNorris);