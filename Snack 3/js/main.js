// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const numeri = [1, 2, 3, 4, 5, 6];



function filterPerPosition(a, b, array) {
    let newArray = [];

     numeri.filter((element, index) => {
        if(index >= a && index <= b){

            newArray.push(element);
        }
    });
    
    return newArray;
}


const numeriFiltrati = filterPerPosition( 2, 4, numeri); 
console.log(numeriFiltrati);