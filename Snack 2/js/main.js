// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, 'punti fatti', falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// 'punti fatti' e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  {
    nome: "Napoli",
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    nome: "Palermo",
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: "Avellino",
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: "Supergiovane Castelbuono",
    'punti fatti': 0,
    'falli subiti': 0,
  }
];

squadre.forEach(element => {
    element['punti fatti'] = Math.floor((Math.random() * 100)+1);
    element['falli subiti'] = Math.floor((Math.random() * 50)+1);
});

const squadre2 = squadre.map(({nome, ['falli subiti']:falli}) => ({nome, ['falli subiti']:falli}));


console.log(squadre2);