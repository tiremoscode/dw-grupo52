// Promesas
// que es asincrono
// que es sincrono

// En Js una prmesa es un objeto que va a represenar el reultado de una funalización de un código
// ya sea un valor satisfactorio u on reultado de error.
// La comunicación a una base de datos. Conectarse a una MySQL, PostgreSQL o SQL Server (VPN - Virtual Private Network) o
// los de No SQL (MongoDB, DynamoDB).
// Consumo de Webservices (API).

// Estados.
// 1. Pendiente (Pending). El estado inicial. La operación no ha terminado pero la promesa ya se creo.
// 2. Cumplida / Satisfactoria (FulFilled). La operación se completo con éxito y la promesa obtuvo un resultado.
// 3. Rechazada (Rejected). La operación fallo y la promea tiene un motivo por el cual falló.

// Estructura bae de una promesa.

const miPrimerPromesa = new Promise((resolve, reject) => {
    // Simular una operación asincrona

    const conexionExitosaABD = true; // Este es el ejemplo de que en la práctica puede decir que i me logre conectar a la base de datos.
    if (conexionExitosaABD) {
        resolve('Operación éxitosa en la base de datos'); // la conexión fue exitosa
    } else {
        reject('Error al momento de conectarme'); // hubo un posible error
    }
});

// Imprimir el resultado de esta promesa.
miPrimerPromesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('La operación ha finalizado');
    });