# Test deg selv 2

Temaer:

- If/Else
- Boolske uttrykk
- Logiske operatorer

# 1.1

---

Skriv et program med et if-statement som printer ut "Hei verden!"

# 2.1

---

Velg a, b og c slik at teksten skrives til nettsiden

```JavaScript

//Hent et p-element fra domen

let a =  ; // Skriv inn True eller False
let b =  ; // Skriv inn True eller False
let c =  ; // Skriv inn True eller False

if (!(a && b) && c){
    oppgave2_1.innerHTML = "Du fikk det til!";
}
```

# 2.2

---

Fullfør koden der det er angitt i koden under, slik at koden gjør følgende:

Print ut det største tallet, ved hjelp av IF ELSE. Hvis tallene er like store skal begge skrives ut.

```JavaScript
let aa = Math.floor(Math.random()*10) + 1;
let bb = Math.floor(Math.random()*10) + 1;

oppgave2_2.innerHTML = `Tallene var: a: ${aa}, b: ${bb}`;
```

# 2.3

---

Hvis variabelen, alder, ewr større eller lik 18, skriv ut alderen og at personen er gammel nok. Hvis ikke skal alderen skrives ut og at personen er for ung.

```JavaScript
alder = Math.floor(Math.random()*100) + 1;

// resten av koden...
```

# 2.4

---

Fullfør koden under (fjern prikkene og skriv koden som mangler) for å få den til å kjøre slik at print-setningene blir riktige ut fra hva som gis som input fra bruker.

```JavaScript
let aaa = Math.floor(Math.random()*10) + 1;
let bbb = Math.floor(Math.random()*10) + 1;

if ......:
    print("A er større enn B")

else if......:
    print("A er ikke lik B")
else if......:
    print("B er større enn A")
else
    print('A er lik B')

```

# 3.1

---

Skriv et program som genererer en tilfeldig pengsum poengsum mellom -10-110. Programmet skal skrive ut hvilken karakter poengsummen tilsvarer etter skalaen under. Du skal også skrve forklarende tekst, og den poengsummen som ble generert. Hvis tallet som ble generert er mindre enn 0 eller større enn 100 skal det skrives ut en feilmelding.

- F = 0-14 poeng
- E = 15-29 poeng
- D = 30-49 poeng
- C = 50-69 poeng
- B = 70-84 poeng
- A = 85-100 poeng
