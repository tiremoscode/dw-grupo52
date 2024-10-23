

function suma(){
    console.log("suma");
    
    const valor1 = parseInt (document.getElementById('numero1').value);
    const valor2 = parseInt (document.getElementById('numero2').value);

    console.log(valor1); 
    const sumar= valor1 + valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${sumar}`;
}

function resta(){
    console.log("resta");
    
    const valor1 = parseInt (document.getElementById('numero1').value);
    const valor2 = parseInt (document.getElementById('numero2').value);

    console.log(valor1); 
    const resta= valor1 - valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;
}

function multiplicar(){
    console.log("multiplicar");
    
    const valor1 = parseInt (document.getElementById('numero1').value);
    const valor2 = parseInt (document.getElementById('numero2').value);

    console.log(valor1); 
    const multiplicar= valor1 * valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multiplicar}`;
}
function dividir (){
    console.log("dividir");
    
    const valor1 = parseInt (document.getElementById('numero1').value);
    const valor2 = parseInt (document.getElementById('numero2').value);

    console.log(valor1); 
    const dividir= valor1 - valor2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${dividir}`;
}