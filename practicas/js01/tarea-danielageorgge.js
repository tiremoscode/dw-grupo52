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
    function calculadora (a,b,operacion) {

        let 
        suma = a+b;
        resta =a-b;
        multiplicacion = a*b;
        division =a/b;
              
            console.log (operacion, a, '+', b ,'=',suma);
            console.log (operacion, a, '-', b ,'=',resta);
            console.log (operacion, a, '*', b ,'=',multiplicacion);
            console.log (operacion, a, '/', b ,'=',divison);
        }
        
        calculadora (2,16,'suma');