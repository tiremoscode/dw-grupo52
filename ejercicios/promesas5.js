// Promises Race.
// Devuelve una nueva promesa que sea resuelve tan pronto como la primera de las promesas en el arreglo
// sea resulta o sea rechazada.

const promesa1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Resultado Promesa 1'));
const promesa2 = new Promise((resolve) => setTimeout(resolve, 4000, 'Resultado Promesa 2'));

Promise.race([promesa1, promesa2])
    .then((resultado) => {
        console.log(resultado);
    }).catch((error) => {
        console.log('error ', error);
    });