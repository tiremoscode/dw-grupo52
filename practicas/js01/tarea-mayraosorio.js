
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            if (num2 === 0) {
                return 'Error: División por cero';
            }
            return num1 / num2;
        default:
            return 'Operación no válida';
    }
}

calculadora(2, 2, 'suma');

