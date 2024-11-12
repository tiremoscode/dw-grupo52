/*Tarea: Objeto realizado con gustos musicales*/

// Manera de hacer un objeto
// const gustoMusical= {
//     grupoMusical: 'Ghost',
//     nombreCantante: 'Tobias Forge',
//     integrantes: 8,
//     intrumentos: true,
//     pais: 'Suecia',
//     estado: 'activo',
//     generoMusical: {
//         'hard rock': true,
//         'reggaeton': false,
//         'Heavy metal': true,
//         'Rock progresivo': true,
//     }
// }

// console.log(gustoMusical);

/*Otra manera de realizar objetos*/

const gustosMusicales = new Object();
gustosMusicales.grupo = "Ghost";
gustosMusicales.vocalista = "Tobias Forge";
gustosMusicales.integrantes = 8;
gustosMusicales.instrumentos = true;
gustosMusicales.genero = "Rock progresivo";
gustosMusicales.pais = "Suecia";
gustosMusicales.esRegaeton = false;
gustosMusicales.estadoActivo = true;

console.log(gustosMusicales);

//Extraemos propiedades
console.log(gustosMusicales.estadoActivo);
console.log(gustosMusicales.genero);

//Modificamos alguna que otra propiedad
gustosMusicales.vocalista = "Bruno Mars";
gustosMusicales.pais = "México";

console.log(gustosMusicales);


