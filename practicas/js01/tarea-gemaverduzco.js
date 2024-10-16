/* Instrucciones de la tarea */

/* Calculadora 
    Suma
    Resta
    Multiplicación
    División 
    
    Crear una función que a través de 3 parámetros
    permita hacer la operación solicitada

    Ejemplo: Suma de 2 + 2;
    */

function calculadora(valor1, valor2, operacion) {
    // ToDo
}

calculadora(2, 2, 'suma');

let operador = prompt('que opercion desea hacer: 1- Sumar || 2- Restar');
let numero1 = Number(prompt('Ingrese el primer numero'))
let numero2 = Number(prompt('Ingrese el segundo numero'))

if(operador == 1){
    total= numero1+numero2
    alert('El resultado de la suma es de'+total)
}else if(operador == 2){
    total = numero1-numero2
    alert('El resultado de la resta es de'+total)
}