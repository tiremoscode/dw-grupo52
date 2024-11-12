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

    let x= 6;
    let y= 3;
    
    
    function suma(x,y){
        console.log(`La suma de ${x} + ${y} es: ${x + y}`);
    }
    function resta(x,y){
        console.log(`La resta de ${x} - ${y} es: ${x - y}`);
    }
    function multiplicacion(x,y){
        console.log(`La multiplicacion de ${x} * ${y} es: ${x * y}`);
    }
    function division(x,y){
        console.log(`La división de ${x} / ${y} es: ${x / y}`);
    }
    
    suma(x,y);
    resta(x,y);
    multiplicacion(x,y);
    division(x,y);