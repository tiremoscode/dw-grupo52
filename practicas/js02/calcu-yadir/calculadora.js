function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const suma = valor1 + valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}
function restar() {
    const valor1 = parseInt(document.getElementById('resta-numero1').value);
    const valor2 = parseInt(document.getElementById('resta-numero2').value);

    const resta = valor1 - valor2;

    const resultado = document.getElementById('resta-resultado');
    resultado.innerHTML = `Resultado: ${resta}`;
}
function multiplicar() {
    const valor1 = parseInt(document.getElementById('multiplicacion-numero1').value);
    const valor2 = parseInt(document.getElementById('multiplicacion-numero2').value);

    const multiplicacion = valor1 * valor2;

    const resultado = document.getElementById('multiplicacion-resultado');
    resultado.innerHTML = `Resultado: ${multiplicacion}`;
}
function dividir() {
    const valor1 = parseFloat(document.getElementById('division-numero1').value);
    const valor2 = parseFloat(document.getElementById('division-numero2').value);
    if (valor2 !== 0) {
        const division = valor1 / valor2;
        const resultado = document.getElementById('division-resultado');
        resultado.innerHTML = `Resultado: ${division}`;
    } else {
        const resultado = document.getElementById('division-resultado');
        resultado.innerHTML = `Error: al dividir entre cero`;
    }
}