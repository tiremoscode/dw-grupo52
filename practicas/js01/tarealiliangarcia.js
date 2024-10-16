// Definimos la función 'calculadora' que recibe tres parámetros:
// valor1 y valor2 son los números que queremos operar
// operacion es una cadena que indica el tipo de operación que se va a realizar ('suma', 'resta', 'multiplicacion', 'division')
function calculadora(valor1, valor2, operacion) {
    // Creamos una variable resultado para almacenar el valor de la operación
    let resultado;

    // Usamos un bloque switch para realizar la operación según el valor del parámetro 'operacion'
    switch(operacion) {
        case 'suma':
            // Si la operación es 'suma', sumamos valor1 y valor2
            resultado = valor1 + valor2;
            break;
        case 'resta':
            // Si la operación es 'resta', restamos valor2 a valor1
            resultado = valor1 - valor2;
            break;
        case 'multiplicacion':
            // Si la operación es 'multiplicacion', multiplicamos valor1 por valor2
            resultado = valor1 * valor2;
            break;
        case 'division':
            // Si la operación es 'division', verificamos que valor2 no sea 0 para evitar división por cero
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                // Si valor2 es 0, mostramos un mensaje de error
                return 'Error: División por cero no permitida';
            }
            break;
        default:
            // Si la operación no coincide con ninguna de las anteriores, mostramos un mensaje de error
            return 'Error: Operación no válida';
    }

    // Devolvemos el resultado de la operación
    return resultado;
}

// Ejemplos de uso:
console.log(calculadora(2, 2, 'suma')); // Resultado: 4
console.log(calculadora(5, 3, 'resta')); // Resultado: 2
console.log(calculadora(4, 6, 'multiplicacion')); // Resultado: 24
console.log(calculadora(10, 2, 'division')); // Resultado: 5
console.log(calculadora(10, 0, 'division')); // Resultado: Error: División por cero no permitida
 

