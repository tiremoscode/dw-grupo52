function calculadora(valor1, valor2, operacion) {
    switch (operacion) {
        case 'suma':
            return valor1 + valor2;
        case 'resta':
            return valor1 - valor2;
        case 'multiplicacion':
            return valor1 * valor2;
        case 'division':
            return valor2 !== 0 ? valor1 / valor2 : 'Error: División por cero';
        default:
            return 'Operación no válida';
    }
}

console.log(calculadora(2, 2, 'suma'));           // 4
console.log(calculadora(5, 3, 'resta'));          // 2
console.log(calculadora(4, 2, 'multiplicacion')); // 8
console.log(calculadora(10, 2, 'division'));      // 5
console.log(calculadora(10, 0, 'division'));      // Error: División por cero
