function suma(){
    const valor1 = parseInt(document.getElementById('num1s').value);
    const valor2 = parseInt(document.getElementById('num2s').value);

    const suma = valor1 + valor2;
    const resultadoSuma = document.getElementById('resultadoSuma');
    resultadoSuma.innerHTML = `Resultado de sumar valores : ${suma}`;
}

function resta (){
    const valor3 = parseInt(document.getElementById('num1r').value);
    const valor4 = parseInt(document.getElementById('num2r').value);
    
    const resta = valor3 - valor4;
    const resultadoResta = document.getElementById('resultadoResta');
    resultadoResta.innerHTML = `Resultado de restar valores : ${resta}`;
}

function multiplicacion(){
    const valor5 = parseInt(document.getElementById('num1m').value);
    const valor6 = parseInt(document.getElementById('num1m').value);
    
    const multiplicacion = valor5 * valor6;
    const resultadoMultiplicacion = document.getElementById('resultadoMultiplicacion');
    resultadoMultiplicacion.innerHTML = `Resultado de multiplicar valores : ${multiplicacion}`;
}

function division(){
    const valor7 = parseInt(document.getElementById('num1d').value);
    const valor8 = parseInt(document.getElementById('num2d').value);

    const division = valor7 / valor8;
    const resultadoDivision = document.getElementById('resultadoDivision');
    resultadoDivision.innerHTML = `Resultado de dividir valores : ${division}` 
}

