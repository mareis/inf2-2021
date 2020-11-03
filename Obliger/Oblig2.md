# Oblig 2: Input, event, løkker og lister

## Oppgave 1  Magic 8 ball
---

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Magic8ball.jpg/220px-Magic8ball.jpg">



**a)**  Opprett et array med svar, [eksempler her](https://en.wikipedia.org/wiki/Magic_8-Ball).

```JavaScript
let svar = ["It is certain.", "Most likely.", "Better not tell you now."]
```
osv

**b)**  Lag en knapp og plukk ut et tilfeldig svar og skriv det til skjerm når man trykker på knappen. 

**c)** Bruk [Bootstrap](https://getbootstrap.com/docs/4.5/components/alerts/) for å få siden til å se litt bedre ut ved å legge til

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
```

i head-tagen. Og velg en av knappene [her](https://getbootstrap.com/docs/4.5/components/buttons/).

## Oppgave 2 for x of liste
---

**a)**

Legg følgende til i head-tagen 
```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
```

dette i body
```HTML
<ul id="liste" class="list-group"></ul>
```

og dette i en script-tag

JavaScript
```JavaScript
let biler = ["Banan", "Eple", "Appelsin"];

const listeE = document.querySelector("#liste");
listeE.innerHTML = "";

for (const x of biler) {
  listeE.innerHTML += `<li class="list-group-item">${x}</li>`;
}
```

**b)** Kommenter JavaScript-koden du limte inn i a). Les om for...of [her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

**c)** Bytt ut for-løkken med den du pleier å bruke og sammenlign dem.

**d)** Bytt ut listen med listen din fra oppgave 1 og bruk den forløkka du syns passer best i dette tilfelle

**c)** Bruk det ordet som forekommer flest ganger i listen din og lag en if-setning i for-løkken din som skjekker om ordet forekommer i listeelementet.

Hvis ordet forekommer skal du skrive ut 

```Html
`<li class="list-group-item list-group-item-success">${x}</li>`
```
slik at elementet blir grønt

Du kan bruke [includes()](https://www.w3schools.com/jsref/jsref_includes.asp) og [toLowerCase()](https://www.w3schools.com/jsref/jsref_tolowercase.asp) når du løser oppgaven.



## Oppgave 3 Push
---

[Array push() - W3Schools](https://www.w3schools.com/jsref/jsref_push.asp)

I denne oppgavene skal du legge til elementer til et Array med push()

Eksempel på hvordan man legger til en ny frukt i et frukt-Array.
```JavaScript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
```

**a)** Deklarer en tom liste ```let priser = []``` og bruk et inputfelt og en knapp til å legge til nye verdier til pris-Arrayet.

**b)**  Anvend funksjonen under og oppdater summen til priser-Arrayet på nettsiden hver gang man legger til en ny pris.
Kommenter hva som skjer på hver linje

```JavaScript
function listeSum(liste){
    sum = 0
    for(tall of liste){
        sum += tall
    }
    return sum
}
```

**c)** Utvid programmet til å skrive ut gjennomsnitt, makspris og minpris også

Tips: [Math.max()](https://www.w3schools.com/jsref/jsref_max.asp)  og [Math.min()](https://www.w3schools.com/jsref/jsref_min.asp)

Når dere bruker Math.max og min med array må dere dele opp i alle tallem med ...-notasjonen  ...[1, 5, 2] gir 1, 5, 2

```JavaScript
function listeMaks(liste){
  return Math.max(...liste);
}
```


## Oppgave 4 
---

**a)**
Legg følgende til i head-tagen 
```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
```

og dette i body
```HTML
<div class="container-sm">
    <h1>Bootstrap</h1>
    <label for="prisHytte"></label>
    <input type="number" class="form-control" id="prisHytte" /><br />
    <button type="button" id="knapp" class="btn btn-primary">Primary</button>

    <div id="feilmelding" class="alert alert-danger" role="alert">
        Boks til feilmelding. 
    </div>

    <ul id="liste" class="list-group">
        <!-- <li class="list-group-item"> osv </li> -->
    </ul>
</div>
```

**b)** Lag et program som tar input-verdien og legger den til et Array (liste) med push og så skriver ut arrayet til ul-elementet over. Bruk gjerne for-løkken fra oppgave 2 når du skriver ut arrayet. 

**c)** Legg til bootstrap til oppgave 3 slik at appen ser bedre ut.


## Oppgave 5
---

I denne oppgavene skal du lage et gjettespill.
Last ned <a href="https://mrfylke-my.sharepoint.com/:u:/g/personal/mads_opstad_reistadbakk_mrfylke_no/EQ0l4CnIp2hOnpNneElPtkkB_22yGLiW4vw4UO9QQLvlTA?e=v0aZRD">Filer</a>.

**a)** Klipp til lydfilen, med <a href="https://www.ocenaudio.com">ocenaudio</a>, slik at du får tre filer med heiaropet til de ulike lagene.

**b)** Lag et array med navnene på de tre lydfilene du klippet til i a. og spill av av en tilfeldig lyd fra listen når du trykker på en spill-lyd-knapp

```JavaScript
let fotballag = ["lag1.mp3", "lag2.mp3", "lag3.mp3"]
```

f.eks hvis det tilfeldige tallet fra Math.random er 0

```JavaScript
let laget = new Audio(`audio/${fotballag[0]}`);
laget.play();
```

**c)** Lag tre knapper, ett for hvert fotballag. Hvis man gjetter riktig skal man få ett poeng og en gratulasjon, hvis man gjetter feil får man 0 poeng og en tilbakemelding. Summer opp poengsummen underveis.




