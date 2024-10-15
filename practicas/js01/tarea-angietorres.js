/* Instrucciones de la tarea */

/* Calculadora 
    Suma
    Resta
    Multiplicación
    División 
    
    Crear una función que a través de 3 parámetros
    permita hacer la operación solicitada

    Ejemplo: Suma de 2 + 2;
    */

    /*function calculadora(valor1, valor2, operacion) {
        // ToDo
    }
    
    calculadora(2, 2, 'suma');*/


    function calculadora(valor1, valor2, operacion) {
    switch (operacion.toLowerCase()) {
        case 'suma':
            return valor1 + valor2;
        case 'resta':
            return valor1 - valor2;
        case 'multiplicacion':
        case 'multiplicación': // Aceptamos ambas formas
            return valor1 * valor2;
        case 'division':
        case 'división': // Aceptamos ambas formas
            if (valor2 === 0) {
                return 'Error: No se puede dividir entre 0';
            }
            return valor1 / valor2;
        default:
            return 'Operación no válida';
    }
}

// Ejemplos de uso
console.log(calculadora(2, -2, 'suma'));           // 0
console.log(calculadora(10, 15, 'resta'));         // -5
console.log(calculadora(0.5, 3, 'multiplicacion')); // 1.5
console.log(calculadora(9, 3, 'división'));       // 3
console.log(calculadora(10, 0, 'división'));      // Error: No se puede dividir entre 0
