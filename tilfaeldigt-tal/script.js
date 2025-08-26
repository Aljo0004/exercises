let skjultTal = Math.floor(Math.random() * 101);
console.log(skjultTal);

const p2 = document.querySelector("#p2");
const input = document.querySelector("input");
const knap = document.querySelector("#checkknap");

knap.addEventListener("click", function () {
  let brugerGæt = Number(input.value);

  if (brugerGæt < skjultTal) {
    p2.textContent = "Højere...";
  } else if (brugerGæt > skjultTal) {
    p2.textContent = "Lavere...";
  } else if (brugerGæt === skjultTal) {
    p2.textContent = "Korrekt!";
  }
});
