function calculadora(a, b, operacion) {
    switch (operacion) {
        case 'suma':
            return a + b;
        case 'resta':
            return a - b;
        case 'multiplicacion':
            return a * b;
        case 'division':
            if (b === 0) {
                return 'Error: División por cero';
            }
            return a / b;
        default:
            return 'Operación no válida';
    }
}

calculadora(4, 2, 'suma');