document.querySelector("#theme").addEventListener("change", function (event) {
  document.body.dataset.theme = event.target.value;
  console.log(event.target.value);
});
/*
Forklaring af koden:

1. document.querySelector("#theme")
   - Finder det HTML-element, der har id="theme" (din <select>-dropdown).

2. .addEventListener("change", function (event) { ... })
   - Tilføjer en event listener, som lytter efter "change"-begivenheden.
   - "change" sker, når brugeren vælger en ny mulighed i dropdown-menuen.

3. function (event) { ... }
   - Dette er en anonym funktion, som bliver kaldt, hver gang "change"-begivenheden sker.
   - "event" er et objekt, der indeholder information om begivenheden.

4. event.target.value
   - "event.target" refererer til det element, hvor begivenheden skete (her: <select>-elementet).
   - ".value" giver den valgte værdi i dropdown-menuen (fx "dark", "light" eller "colorful").

5. document.body.dataset.theme = event.target.value;
   - Sætter værdien af "data-theme"-attributten på <body>-elementet til det valgte tema.
   - Dette gør, at CSS kan ændre udseendet baseret på det valgte tema.
*/

// LÆRERS LØSNING
// document.querySelector("#theme").addEventListener("change",(evt)=>{
// console.log(evt.target.value);
