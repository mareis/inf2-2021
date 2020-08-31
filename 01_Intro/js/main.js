let jegErEnVariabel = 42;
const jegErEnKonstant = 21;

let jegErListe = [1, 5, 2, 5, 7];

let jegErEtObjekt = { navn: "Gøril", alder: 48 };

// Eksempler på utskrift
let tallene = [1, 5, 2, 5, 7, 2, 4, 8, 0, -4, 5];
console.log(tallene[0]);
console.log(tallene[4]);

for (let i = 0; i < tallene.length; i++) {
    console.log(tallene[i]);
}

tallene.forEach(function(tall, i) {
    console.log(i);
    console.log(tall);
});

tallene.forEach((tall) => console.log(tall));

console.clear();

// Tell antall 5-ere i arrayet

teller = 0;
for (let i = 0; i < tallene.length; i++) {
    if (tallene[i] === 5) {
        teller++;
    }
}
console.log(`Det er ${teller} 5-ere i arrayet.`);

teller = 0;
tallene.forEach(function(tall) {
    if (tall === 5) {
        teller++;
    }
});
console.log(`Det er ${teller} 5-ere i arrayet.`);

// Tell negative tall i arrayet
// Tell antall partall i arrayet
// Tell antall primtall