"use strict";
function momsBeregner(beloeb, moms) {
  const beloebNum = parseInt(beloeb);
  const momsNum = parseInt(moms);

  const resultat = beloebNum * (1 + momsNum / 100);
  console.log("Resultat", resultat);
}
momsBeregner("200", "25");
