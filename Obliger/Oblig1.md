# Oblig 1: Utskrift, variabler, datatyper og pseudokode

## Oppgave 1
---
 a) Skriv et program som skriver "Programmering er veldig "kult"!" til konsoll. Legg merke til at de doble fnuttene (anførselstegn) i teksten også skal skrives ut.

 b) Hvilke(n) funksjon(er) har kommentarer i programkode?

 c) Hva er feil med koden i "Kodebit 1" under? Rett den opp så den kjører.

d) Skriv adressen ut på følgende to måter ved å bruke variabler: "Adressen er Kongens gate 432b" og "Gaten er Kongens Gate, husnummeret er 432, oppgang b"

```JavaScript
let gate = 'Kongens gate'
let husnr = 432
oppgang = b

adresse = gate + husnr + oppgang
console.log(adresse)
```

## Oppgave 2
---

a) Lagre tallet 1000 som heltall i en variabel

b) Bruk heltallsdivisjon, og del tallet fra a) på 23

c) Ta resultatet fra b) og gang det med 23 igjen. Hvorfor blir ikke svaret 1000? Forklar hvorfor heltallsdivisjon kan være nyttig.

## Oppgave 3
---

Med utgangspunkt i programmet "Økning av antallet blomster pr uke i et bed" under:

a) Skriv pseudokode for programmet

b) Erstatt variabelnavnene i programmet med beskrivende, gyldige variabelnavn

c) Endre tilordningen av variablene slik at programmet fungerer

d) Skriv antall blomster etter 10 uker til konsoll med en forklarende setning

```JavaScript
'150' = antall blomster i bedet
15 % økning pr uke = 0.15

antall blomster om en uke = antall blomster i bedet + (antall blomster i bedet * 15 % økning pr uke)
```

## Oppgave 4
---

Du er på restaurant med andre studenter på faget fra din kommune, og på regningen er følgende informasjon:

Total pris for mat og drikke: 850 kr
Studentrabatt: 25%
Tips: 10%

a) Legg informasjonen inn i variabler

b) Lag en ny variabel som regner ut total pris på middagen, og skriv ut denne

c) Regn ut pris per person for et valgfritt antall personer, og skriv ut pris per person og antallet personer til konsoll

## Oppgave 5
---

Listen under er ingrediensene for å lage småkaker. Denne oppskriften gir 36 småkaker.

- 100 g smør
- 180 g hvetemel
- 350 g brunt sukker
- 4 egg
- 1 ts bakepulver

Skriv et program som printer ut en liste med justert mengde av ingrediensene for 10 småkaker.

## Oppgave 6
---

Arealet av en sylinder har <a href="https://www.matematikk.org/artikkel.html?tid=154998&within_tid=154319">formel</a>: 2 ganger arealSirkel + omkretsSirkel ganger h.

Oppgave: Lag et program bruke variabler for pi, radius, høyde og sirkelens omkrets og areal, slik at programmet unngår å gjøre på nytt beregninger som allerede er gjort før.

Radiusen til grunnflaten er 5.4 m og høyden til sylinderen er 7.9 m.