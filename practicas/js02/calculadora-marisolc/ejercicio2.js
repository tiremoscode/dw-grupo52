function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const suma = valor1 + valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}

function restar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const resta = valor1 - valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;
}

function multiplicar() {
    const valor1 = parseFloat(document.getElementById('numero1').value);
    const valor2 = parseFloat(document.getElementById('numero2').value);

    const multiplica = valor1 * valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multiplica}`;
}

function dividir() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const divide = valor1 / valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${divide}`;
}
