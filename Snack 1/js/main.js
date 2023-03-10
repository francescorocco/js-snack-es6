// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bicicles =[
    {
        name: "Bicicle 1",
        peso:  400,
    },
    {
        name: "Bicicle 2",
        peso:  300,
    },
    {
        name: "Bicicle 3",
        peso:  200,
    }
];

const biciDom = document.getElementById("bici");

let biciLeggera = bicicles[0];
bicicles.forEach(element => {
  if (element.peso < biciLeggera.peso) {
    biciLeggera = element;
  }
});
const {name, peso} = biciLeggera;

biciDom.innerHTML = `Nome: ${name}<br>Peso: ${peso}`;