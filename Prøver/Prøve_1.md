# Prøve 1

**Del 1** - uten hjelpemidler

## 1.1 Hallo verden!

---
```javascript
let skole = "Molde VGS";
let navn = "Mario";

console.log(`Velkommen til ${skole}, ${navn}!`);
```
Svar:__________________


## 1.2

---
```javascript
let tall1 = "7";
let tall2 = 3;

console.log(tall1 + tall2);
```

Svar: ________________

## 1.3

---
```javascript
let tall3 = 7;
let tall4 = 3;

console.log(tall3 % tall4);
```
Svar: ________________

## 1.4

---


```javascript
let tall5 = 9;
let tall6 = 9 + 18 / tall5;

console.log(tall6);
```
Svar: _______________


## 1.5

---
```javascript
let tall7 = 7;
let tall8 = 9;

console.log(tall7 != tall8);
```
Svar: ____________________

## 1.6

---
```javascript
for (let i = 2; i < 7; i++) {
    console.log(i);
}
```

Svar: _______________________


## 1.7
---
```javascript

let liste1 = [2, 1, 3, 2];
let resultat = 0;

for (let i = 0; i<liste1.length; i++) {
    resultat = resultat*liste1[i];
}

console.log(resultat);

```
Svar: _______________


## 1.8

---
```javascript
function hilsen() {
    return "Ha en fin dag!";
}
console.log(hilsen());
```

Svar: _______________________

## 1.9

---
```javascript
function sjekk(t1, t2) {
    if (t1 > t2) {
        return t1;
    }
    else {
        return t2;
    }
}
console.log(sjekk(4, 5));
```

Svar: _______________________


**Del 2** - med hjelpemidler
## 2.1 Hyttetur

---
**a)**

La oss tenke oss at det er bestilt en hytte en helg med maksimalt 5 sengeplasser.
Prisen er 4000 kr for en helg

Lag et program der du skriver inn antall personer som skal og når du trykker på knappen skal programmet beregne pris per stykk.

Programmet skal kun godta verdier fra 1 til 5.


**b)** 

Utvid programmet til å ta inn pris på hyttten i et inputfelt.


**c)**

```javascript
let prisliste = [12.3, 423.5, 21, 53, 20, 18, 537, 101, 723, 123]
```

Etter en handletur på vei til hytta ble utgiftene som i arrayet over. 
Utvid programmet til å beregne pris per person etter handleturen.


**d)** 

Beregn totalpris per person og totalpris for alle, og skriv ut all informasjon till nettsiden på en ryddig måte.