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

const calculadora =(a, b,) => {
   
    let suma = a + b, resta = a - b, multiplicacion = a * b, división = a / b;
    console.log(calculadora(a,b)+ suma);
    console.log(calculadora(a,b)+ resta);
    console.log(calculadora(a,b)+ multiplicacion);
    console.log(calculadora(a,b)+ división);

}


calculadora(10,5);
