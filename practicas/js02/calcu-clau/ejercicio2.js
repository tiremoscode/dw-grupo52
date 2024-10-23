
function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);
    const suma = valor1 + valor2;

    resultado.innerHTML = `Resultado: ${suma}`;
}

function restar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const resta = valor1 - valor2;
    resultado.innerHTML = `Resultado: ${resta}`;
}
function dividir() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);
    const division = valor1 / valor2;

    if (valor1 === 0 || valor2 ===0) {
         return resultado.innerHTML = "Error: No se puede dividir entre cero"; 
    }
    else {
        return resultado.innerHTML = `Resultado: ${division}`;
    }
}
function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const multi = valor1 * valor2;
    resultado.innerHTML = `Resultado: ${multi}`;
}
function limpiar (){
    document.getElementById('numero1').value ="";
    document.getElementById('numero2').value ="";
    document.getElementById('resultado').innerText ="";
}