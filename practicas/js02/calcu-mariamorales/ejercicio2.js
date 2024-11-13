function Valores() {
    const valor1 = parseInt(document.getElementById('valor1').value);
    const valor2 = parseInt(document.getElementById('valor2').value);
    return { valor1, valor2 };
}

function Resultado(mensaje) {
    document.getElementById('resultado').textContent = mensaje;
}

function suma() {
    const { valor1, valor2 } = Valores();
    Resultado(`La suma de ${valor1} + ${valor2} es: ${valor1 + valor2}`);
}

function resta() {
    const { valor1, valor2 } = Valores();
    Resultado(`La resta de ${valor1} - ${valor2} es: ${valor1 - valor2}`);
}

function multiplicacion() {
    const { valor1, valor2 } = Valores();
    Resultado(`La multiplicación de ${valor1} * ${valor2} es: ${valor1 * valor2}`);
}

function division() {
    const { valor1, valor2 } = Valores();
    if (valor2 !== 0) {
        Resultado(`La división de ${valor1} / ${valor2} es: ${valor1 / valor2}`);
    } else {
        Resultado("Error: No se puede dividir entre cero.");
    }
}