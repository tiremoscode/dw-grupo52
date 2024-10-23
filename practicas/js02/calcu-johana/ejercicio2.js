// Función para sumar
function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const suma = valor1 + valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}

// Función para restar
function restar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const resta = valor1 - valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;
}

// Función para multiplicar
function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const multiplicacion = valor1 * valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multiplicacion}`;
}

// Función para dividir
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
