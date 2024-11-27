/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Creo un array di oggetti come indicato 

const team = [
  {
    name : 'Milan',
    points : 0,
    fouls : 0
  },
  {
    name : 'Inter',
    points : 0,
    fouls : 0
  },
  {
    name : 'Juventus',
    points : 0,
    fouls : 0
  },
  {
    name : 'Napoli',
    points : 0,
    fouls : 0
  }
]

// Creo un array vuoto per inserire il nome delle squadre ed i falli subiti
// Creo un ciclo for per leggere tutto l'array e inserire numeri random in points e fouls
// Pusho all'interno dell'array vuoto i dati richiesti


let teamRanking = [];

for (let i = 0; i < team.length; i++){
  let keyTeam = team[i];
    keyTeam.points = Math.floor(Math.random() * 99);
    keyTeam.fouls = Math.floor(Math.random() * 49);
    teamRanking.push(keyTeam.name, keyTeam.fouls);
    
    console.log(teamRanking);
    
}




