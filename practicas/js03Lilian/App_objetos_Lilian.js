// Accediendo a propiedades de un objeto


const seriedelos90s = new Object();
seriedelos90s.serie = "HeyArnold!";
seriedelos90s.año = 1996;
seriedelos90s.genero = "Drama";
seriedelos90s.temporadas = 5;
seriedelos90s.animada =  true;
seriedelos90s.duracion = "22 minutos";
seriedelos90s.disney = false;



// Notación de Corchetes
console.log(seriedelos90s.serie["HeyArnold!"]);
// Notación de punto
console.log(seriedelos90s.año);



// Modificar Propiedades
console.log(seriedelos90s);

seriedelos90s.personajeprincipal = "Arnold";
seriedelos90s.tienepelicula = true;
console.log(seriedelos90s);