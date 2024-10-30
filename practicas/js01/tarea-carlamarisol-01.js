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

let a= 530;
let b= 769;

suma(a,b);
resta(a,b);
multiplicación(a,b);
division(a,b);

function suma(a,b){
    console.log(a+b)
}
function resta(a,b){
    console.log(a-b);
}
function multiplicación(a,b){
    console.log(a*b);
}
function division(a,b){
    console.log(a/b);
}

