// Accediendo a propiedades de un objeto


const playList = new Object();
playList.cancion1 = "Fake Happy";
playList.genero = "Alternativa/independiente";
playList.lanzamiento = 2015;
playList.autor = "Paramore";
playList.album = "After Laughter";

// Notación de punto
console.log(playList.genero);

// Notación de Corchetes
console.log(playList["lanzamiento"]);

// Modificar Propiedades
console.log(playList);

playList.lanzamiento = 2017;

console.log(playList);