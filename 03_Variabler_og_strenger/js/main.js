//Variabler
let variabel1 = 4; //Number
let variabel2 = "En tekst."; //String

variabel1 += 1; //Ny verdi er nå 5

//Konstanter
const konstant1 = 8;
//konstant1 = 10; gir en feilmelding.

let navn = "Mario";
let alder = 35;

console.log(`Super ${navn} feirer ${alder} års jubileum!`);

const utskrift = document.querySelector("#utskrift");
utskrift.innerHTML = `Super ${navn} feirer ${alder} års jubileum!`;

const html = document.querySelector("#html");
html.innerHTML = `
        <ul>
            <li>Punkt 1</li>
            <li>Punkt 2</li>
            <li>Punkt 3</li>
            <li>Punkt 4</li>
            <li>Punkt 5</li>
            <li>${navn}</li>
            <li>Punkt 7</li>
            <li>Punkt 8</li>
        </ul>
`;
