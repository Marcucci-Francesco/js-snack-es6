/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. 
*/

function arrayValue(array, a, b) {
  let newArray = [];
  newArray = array.slice(a, b);
  return newArray;
}

