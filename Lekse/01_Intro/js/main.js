let tall1 = 93183;
let tall2 = 236582;
let sum = tall1 + tall2;
let diff = Math.abs(tall1 - tall2);
let prod = tall1 * tall2;

console.log(`${tall1} + ${tall2} = ${sum}`);
console.log(`Diferansen mellom ${tall1} og ${tall2} er ${diff}`);
console.log(`${tall1}*${tall2} = ${prod}`);

let tallene = [-3, 5, 8, 12, 0, 33, -4, -20, 9, 10];

tallene.forEach((tall, indeks, liste) => {
    console.log(`${indeks}, ${tall}, ${liste}`);
});

for (let i = 0; i < tallene.length; i++) {
    console.log(tallene[i]);
}
console.clear();

let teller = 0;
tallene.forEach((tall) => {
    if (tall < 0) {
        console.log(tall);
        teller++;
    }
});
console.log(`Det er ${teller} negative tall i arrayet.`);

//partall hvis if(tall%2 === 0)

teller = 0;
tallene.forEach((tall) => {
    if (tall % 2 === 0) {
        teller++; //teller = teller + 1
        console.log(tall);
    }
});
console.log(`Det er ${teller} partall i arrayet.`);