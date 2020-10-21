# Test deg selv 4

**Del 1** - uten hjelpemidler

## 1.1 Hallo verden!

---
```javascript
let skole = "Molde VGS";

console.log(skole);
```
Svar:__________________


## 1.2

---
```javascript
let president_fr = "Emanuel Macron";
let hilsen = `Presidenten i Frankrike heter ${president_fr}.`;

console.log(hilsen);
```

Svar: __________________________

## 1.3

---
```javascript
let tall1 = "7";
let tall2 = "3";

console.log(tall1 + tall2);
```

Svar: ________________

## 1.4

---
```javascript
let tall3 = 7;
let tall4 = 3;

console.log(tall3 % 4);
```
Svar: ________________

## 1.5

---


```javascript
let tall5 = 7;
let tall6 = 10 + 3 * tall5;

console.log(tall6);
```
Svar: _______________


## 1.6

---
```javascript
let tall7 = 7;
let tall8 = 9;

console.log(tall7 == tall8);
```
Svar: ____________________

## 1.7

---
```javascript
for (let i = 0; i < 5; i = i + 1) {
    console.log(i);
}
```

Svar: _______________________


## 1.8 I flammer
---
```javascript

let liste1 = [5, 6, 8, 4, 3, 2];
let resultat = 0;

for (let i = 0; i<liste1.length; i++) {
    resultat = resultat + liste1[i];
}

console.log(resultat);

```
Svar: _______________


**Del 2** - med hjelpemidler
## 2.1 Ferjebilett

---

Du skal lage et system der man kan skrive inn antall pasasjerer og trykke på en knapp. Når man trykker på knappen skal det skris en kvitering til skjermen.,


Skriver man inn 4 så skal dette skrives ut:
```
1 Bil  6m           65,00 kr
3 Voksen           105,00 kr
Sum                170,00 kr           
```

Utvid programmet til å ta i mot antall barn, honør, og voksne for høy måloppnåelse.
```
1 Bil  6m           65,00 kr
1 Voksen            35,00 kr
1 Barn              10,00 kr
1 Honør             15,00 kr
Sum                125,00 kr           
```


## 2.2 Liste

```javascript
let minListe = ["FA", "KB", "OC", "HD", "GE", "IF", "AG", "NH", "LI", "JJ", "BK", "ML"]
```

 1.  Lag en knapp som skriver ut hele lista i en liste (```<ol>```).
 2.  Lag en knapp som skriver de ut alfabetisk i en ```<ol>```.
 3.  Skriv ut annen hvert element i lista i en ```<ol>```.
 4.  Lag en knapp som sletter nummer 4 og 5 og skriv ut resten til en ```<ol>```.



