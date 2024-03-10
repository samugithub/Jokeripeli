const jokeriRivitElementti = document.getElementById("jokeri-rivit");
const uusiRiviPainikeElementti = document.getElementById("uusi-rivi-painike");
const arvottujenRivienLkmElementti = document.getElementById("arvottujen-rivien-lkm");
let arvottujenRivienLkm = 0;

uusiRiviPainikeElementti.addEventListener("click", function() {
  arvottujenRivienLkm++;
  arvottujenRivienLkmElementti.textContent = `Valmiita rivejä: ${arvottujenRivienLkm}`;

  const uusiRiviElementti = document.createElement("tr");
  for (let i = 0; i < 7; i++) {
    const uusiSoluElementti = document.createElement("td");
    uusiSoluElementti.textContent = Math.floor(Math.random() * 10);
    uusiRiviElementti.appendChild(uusiSoluElementti);
  }
  jokeriRivitElementti.appendChild(uusiRiviElementti);
});
