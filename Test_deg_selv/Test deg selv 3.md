# Test deg selv 3

## 1.1 Kvadrattallene

---

Lag et program som skriver ut de 15 første kvadrattallene. 1, 4, 9, 16, ...

## 1.2 Summen av Kvadrattallene

---

Lag et program som skriver ut summen av de 15 første kvadrattallene

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
etDivElement..classList.toggle('klassenavnet');
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
  font-size: 50px;
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

## 3.1 Input text

---
