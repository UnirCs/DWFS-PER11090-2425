document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.getElementById("trigger");
  const jokeText = document.getElementById("joke-text");

  trigger.addEventListener("click", async () => {
    try {
      const { value } = await (
        await fetch("https://api.chucknorris.io/jokes/random")
      ).json();
      jokeText.innerHTML = value;
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  });
});
