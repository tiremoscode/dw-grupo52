

function calculadora(valor1, valor2, operacion) {
    // ToDo
    switch (operacion) {
        case 'suma':
            return valor1 + valor2;
        case 'resta':
            return valor1 - valor2;
        case 'multiplicacion':
            return valor1 * valor2;
        case 'division':
            if (valor1 === 0) {
                return 'error: Division por cero';
            }
            return valor1 / valor2;
        default:
            return 'operacion no valida';

    }
}

calculadora(2, 2, 'suma');