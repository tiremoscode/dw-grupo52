// Promises - All
// Si nosotros tenemos varias promesas y deseamos esperar a que todas se resuelvan antes de continuar,
// Ejecutara a todas las promesas en forma parela y resolverá cuando todas hayan sdo completadas.

const promesa1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Resultado Promesa 1'));
const promesa2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Resultado Promesa 2'));
const promesa3 = new Promise((resolve) => setTimeout(resolve, 1500, 'Resultado Promesa 3'));

Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log(resultados);
    })
    .catch((error) => {
        console.log('Error', error);
    });