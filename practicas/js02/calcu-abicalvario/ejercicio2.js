function suma(){
    const valor1 = parseInt(document.getElementById('num1').value);
    const valor2 = parseInt(document.getElementById('num2').value);    

    const suma = valor1 + valor2;
    const resultadoSuma = document.getElementById('resultadoSuma');
    resultadoSuma.innerHTML = `Sí sumamos los valores nos da como resultado : ${suma}`;

}

function resta(){
    const valor3 = parseInt(document.getElementById('num3').value);
    const valor4 = parseInt(document.getElementById('num4').value);    

    const resta = valor3 - valor4;
    const resultadoResta = document.getElementById('resultadoResta');
    resultadoResta.innerHTML = `Sí restamos los valores nos da como resultado : ${resta}`;

}

function multiplicacion(){
    const valor5 = parseInt(document.getElementById('num5').value);
    const valor6 = parseInt(document.getElementById('num6').value);    


    const multiplicacion = valor5 * valor6;
    const resultadoMultiplica = document.getElementById('resultadoMultiplica');
    resultadoMultiplica.innerHTML = `Sí multiplicamos los valores nos da como resultado : ${multiplicacion}`;

}

function division(){
    const valor7 = parseInt(document.getElementById('num7').value);
    const valor8 = parseInt(document.getElementById('num8').value);    

    const division = valor7 / valor8;
    const resultadoDivision = document.getElementById('resultadoDivision');
    resultadoDivision.innerHTML = `Sí dividimos los valores nos da como resultado : ${division}`;

}