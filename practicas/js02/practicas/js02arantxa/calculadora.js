function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const suma = valor1 + valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}

function resta() {
    const valor1 = parseInt(document.getElementById('minuendo').value);
    const valor2 = parseInt(document.getElementById('sustraendo').value);

    const resta = valor1 - valor2;

    const diferencia = document.getElementById('diferencia');
    diferencia.innerHTML = `Resultado: ${resta}`;
}

function multiplicacion() {
    const valor1 = parseInt(document.getElementById('multiplicando').value);
    const valor2 = parseInt(document.getElementById('multiplicador').value);

    const multiplicacion = valor1 * valor2;

    const producto = document.getElementById('producto');
    producto.innerHTML = `Resultado: ${multiplicacion}`;
}

function division() {
    const valor1 = parseInt(document.getElementById('dividendo').value);
    const valor2 = parseInt(document.getElementById('divisor').value);
    
    const resultadoDiv = document.getElementById('cociente');

    if (valor2 === 0) {
        resultadoDiv.innerHTML = 'La división entre cero no es posible, ingrese otro número';
    } else {
        const resultado = valor1 / valor2; 
        resultadoDiv.innerHTML = `Resultado: ${resultado}`;
    }
}