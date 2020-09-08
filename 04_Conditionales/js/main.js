const sammenligninger = document.querySelector("#sammenligninger");

sammenligninger.innerHTML = `<li>1 == 2 ---> ${1 == 2}</li>`;
sammenligninger.innerHTML += `<li>2 == 2 ---> ${2 == 2}</li>`;
sammenligninger.innerHTML += `<li>'2' == 2 ---> ${"2" == 2}</li>`;
sammenligninger.innerHTML += `<li>'2' === 2 ---> ${
  "2" === 2
} Bruk strengt er lik (===)</li>`;
sammenligninger.innerHTML += `<li>1 < 2 ---> ${1 < 2}</li>`;
sammenligninger.innerHTML += `<li>1 > 2 ---> ${1 > 2}</li>`;
sammenligninger.innerHTML += `<li>1 > 2 || 1 < 2 ---> ${1 > 2 || 1 < 2}</li>`;
sammenligninger.innerHTML += `<li>1 > 2 && 1 < 2 ---> ${1 > 2 && 1 < 2}</li>`;
sammenligninger.innerHTML += `<li>|| --> betyr eller</li>`;
sammenligninger.innerHTML += `<li>&& --> betyr og</li>`;
sammenligninger.innerHTML += `<li>=== --> strengt er lik</li>`;
sammenligninger.innerHTML += `<li>!= --> ulik</li>`;
sammenligninger.innerHTML += `<li> ${false || (true && false)}</li>`;
sammenligninger.innerHTML += `<li> ${true && (false || (!false && true))}</li>`;

a = "Mario";
b = "Luigi";

if (a === b) {
  console.log("Navnene er like");
} else {
  console.log("navnene er ulike.");
}

tall1 = 34;
tall2 = 42;

// hvis tall 1 er større enn tall 2
// så skriv ut talle 1 er størst
if (tall1 > tall2) {
  console.log("Tallet 1 er størst.");
}
// skriv ut at tall 1 er minst hvis det er minst
else if (tall1 < tall2) {
  console.log("Tall 1 er minst");
}
// Skriv ut at tallene er like hvis de er det.
else {
  console.log("Tall 1 er like stort som tall 2.");
}
