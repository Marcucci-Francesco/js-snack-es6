/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


// Creo un array di oggetti con la descrizione indicata delle bici
const bike = [
  {
    name : 'mountain',
    weight : 30
  },
  {
    name : 'street',
    weight : 40
  },
  {
    name : 'race',
    weight : 25
  },
  {
    name : 'treck',
    weight : 35
  }
]

// Creo una variabile con un numero di partenza per andare poi a confrontare i pesi e sostituirlo con il minore

let minWeight = bike[0];

// Creo un ciclo for per leggere l'array di oggetti per poi inserire un if per fare il confronto 

for (let i = 0; i < bike.length; i++){
  const bikeWeight = bike[i];

  if (bikeWeight.weight < minWeight.weight){
    minWeight = bikeWeight;
  }
}

// Stampo la bicicletta con il minor peso 
 console.log(` La bicicletta con minor peso è: ${minWeight.name}`);
 