function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const suma = valor1 + valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}

function restar() {
    const valor1 = parseInt(document.getElementById('numero1resta').value);
    const valor2 = parseInt(document.getElementById('numero2resta').value);

    const resta = valor1 - valor2;

    const resultadoRes = document.getElementById('resultadoResta');
    resultadoRes.innerHTML = `Resultado: ${resta}`;
}
function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero1multi').value);
    const valor2 = parseInt(document.getElementById('numero2multi').value);

    const multi = valor1 * valor2;

    const resultadoMultiplicar = document.getElementById('resultadoMulti');
    resultadoMultiplicar.innerHTML = `Resultado: ${multi}`;
}
function dividir() {
    const valor1 = parseInt(document.getElementById('numero1div').value);
    const valor2 = parseInt(document.getElementById('numero2div').value);

    const div = valor1 / valor2;

    const resultadoDividir = document.getElementById('resultadoDiv');
    resultadoDividir.innerHTML = `Resultado: ${div}`;  
    
    if(valor1 || valor2 == 0){
        /*alert(prompt('La división es incorrecta'));*/
    }
    resultadoDividir.innerHTML = `Resultado: La división es incorrecta`;
}