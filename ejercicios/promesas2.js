const tarea1 = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve('Tarea 1 completada después de un segundo'), 5000);
});

const tarea2 = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve('Tarea 2 completada después de un segundo'), 1000);
})

// Encadenando promesas
tarea1
    .then((resultadoTarea1) => {
        console.log(resultadoTarea1);
        return tarea2;
    })
    .then((resultadoTarea2) => {
        console.log(resultadoTarea2);
    })
    .catch((error) => {
        console.log('Error ', error);

        // Try - Catch
    });