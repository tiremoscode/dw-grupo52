function suma(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const suma = valor1 + valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `resultado: ${suma}`;
}

function restar(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const resta = valor1 - valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;
}

function multiplicar(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const multiplicacion = valor1 * valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multiplicacion}`;
}

function dividir(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const division = valor1 / valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${division}`;
}