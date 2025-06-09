
 // venter til HTML'en er færdigindlæst (så footeren findes i DOM’en)
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("#footer"); // Finder footeren ved hjælp af dens id
 
    setTimeout(() => {
      footer.classList.remove("hide"); // fjerner den klasse, der skjuler footeren.
      footer.classList.add("fadeIn"); // tilføjer den klasse, der animerer footeren synlig
    }, 800); // fader ind efter 800 ms (0.8 sek) – giver en lille forsinkelse
  });