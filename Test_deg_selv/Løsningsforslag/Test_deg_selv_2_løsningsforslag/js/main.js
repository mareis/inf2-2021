//------------------- Oppgave 1.1 ----------------------
const oppgave1_1El = document.querySelector("#oppgave1_1");

if (3 < 7) {
  oppgave1_1El.inneeHTML = "Hei, verden!";
}

//Eller slik
3 < 7 ? (oppgave1_1El.innerHTML = "Hei, verden!") : "";

//------------------- Oppgave 2.1 ----------------------
const oppgave2_1El = document.querySelector("#oppgave2_1");

let a = false; // Skriv inn True eller False
let b = true; // Skriv inn True eller False
let c = true; // Skriv inn True eller False

if (!(a && b) && c) {
  oppgave2_1.innerHTML = "Du fikk det til!";
}
//------------------- Oppgave 2.2 ----------------------
const oppgave2_2 = document.querySelector("#oppgave2_2");
let aa = Math.floor(Math.random() * 10) + 1;
let bb = Math.floor(Math.random() * 10) + 1;

if (aa > bb) {
  oppgave2_2.innerHTML = `${aa} er størst`;
} else if (bb > aa) {
  oppgave2_2.innerHTML = `${bb} er størst`;
} else {
  oppgave2_2.innerHTML = `${aa} og ${bb} er like store`;
}

oppgave2_2.innerHTML += `Tallene var: a: ${aa}, b: ${bb}`;
//------------------- Oppgave 2.3 ----------------------

//------------------- Oppgave 3.1 ----------------------

const knappEl = document.querySelector("#knapp");
const oppgave3_1 = document.querySelector("#oppgave3_1");
knappEl.addEventListener("click", () => {
  let poeng = Number(document.querySelector("#poeng"));
  if (poeng === NaN) {
    oppgave3_1.innerHTML = "Du skrev inn noe feil";
  } else {
    oppgave3_1.innerHTML = returnerPoeng(poeng);
  }
});

function returnerPoeng(poeng) {
  return "A";
}
