// Función de la sumar
function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const suma = valor1 + valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}

// Función de la resta
function restar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const resta = valor1 - valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;
}

// Función de la  multiplicacion
function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const multiplicacion = valor1 * valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multiplicacion}`;
}

// Función de la  division
function dividir() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    if (valor2 === 0) {
        alert("No se puede dividir entre 0");
        return;
    }

    const division = valor1 / valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${division}`;
} 