# Test deg selv 3

## 1.1 Kvadrattallene

---

Lag et program som skriver ut de 15 første kvadrattallene. 1, 4, 9, 16, ...

## 1.2 Summen av Kvadrattallene

---

Lag et program som skriver ut summen av de 15 første kvadrattallene

## 1.3 Pluss og minus

---

Lag et program med to knapper. Den ene knappen skal øket verdien til et tall på skjermen med 1 og den andre knappen skal redusere verdien med 1.

## 2.1 Trekanttallene

---

Lag et program som skriver ut de 10 første trekanttallene og summen når man trykker på en knapp.

## 2.2 Legge til klassenavn

---

Man kan legge til klasser ved hjelp av JavaScript med følgende kode.

```javascript
etDivElement.classList.add("klassenavnet");
```

Legg til en div med en id og legg til css-koden under på nettsiden.

```css
.box {
  width: 300;
  padding: 20px;
  background-color: coral;
  color: white;
  font-size: 25px;
  box-sizing: border-box;
}
```

Lag et program som legger til klassen box til div-en når man trykker på en knapp.

## 2.3 Toggle mellom klassenavn eller ikke

---

Bytt ut toogle med add fra oppgaven over.

```JavaScript
etDivElement.classList.toggle('klassenavnet');
```

Det finnes også remove og replace.

## 2.4 Vise usynlige ting

---

Lag en knapp og legg til en toggle på div-en med usynlig-klassen

```html
<div id="briller" class="usynlig">
  🕶️
</div>
```

```css
#briller {
  font-size: 100px;
}
.usynlig {
  display: none;
}
```

## 3.1 I flammer

---

<img src="img/grid.png">

```html
<div id="grid"></div>
```

```css
body {
  background-color: black;
}
#grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 5px;
}
.box {
  height: 80px;
  background-color: #17181c;
  display: grid;
  place-items: center;
  font-size: 50px;
}
```

- Legg til en knapp som legger til én ny `<div class="box">🔥</div>` i div#grid når man trykker på den.
- Lag en ny knapp øverst som legger til 10 nye `<div class="box">🔥</div>` når man trykker på den. Du må bruke en for-løkke.
- Lag en ny knapp som fjerner alle `<div class="box">🔥</div>`.

## 3.2 Fotball

---

I denne oppgavene skal du presentere 3 fotballag med drakt og heiarop.
Last ned <a href="https://mrfylke-my.sharepoint.com/:u:/g/personal/mads_opstad_reistadbakk_mrfylke_no/EQ0l4CnIp2hOnpNneElPtkkB_22yGLiW4vw4UO9QQLvlTA?e=v0aZRD">Filer</a>.

<img src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-9/92220762_245210226873804_2707486669740703744_n.jpg?_nc_cat=102&_nc_sid=9267fe&_nc_ohc=sZpIlS9nJR0AX_hGy6L&_nc_ht=scontent.fsvg1-1.fna&oh=9264618143465b64de8b995410b6c15a&oe=5F91BC8E" width="500px">

<ol type="a">
    <li>Lag en knapp for hvert av de tre lagene. Når man trykker på knappen så skal navnet på laget og bilde av drakta vises.</li>
    <li>Klipp til lydfilen, med <a href="https://www.ocenaudio.com">ocenaudio</a>, slik at du får tre filer med heiaropet til de ulike lagene.</li>
    <li>Utvid programmet til å spille lyden til laget når man trykker på knappen. </li>
</ol>

Med Javascript

```Javascript
let laget = new Audio('audio/laget.mp3');
laget.play();
```

Med HTML

```html
<audio controls autoplay>
  <source src="audio/laget.mp3" type="audio/mpeg" />
</audio>
```
