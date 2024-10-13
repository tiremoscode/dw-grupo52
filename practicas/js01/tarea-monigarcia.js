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

    function calculadora(valor1, valor2, operacionsuma) {
        var valor1 = 5;
        var valor2 = 2;
        var operacionsuma = valor1 + valor2;
        console.log("la suma es igual a " + operacionsuma);

       var operacionresta = valor1 - valor2;
       console.log("la resta es igual a " + operacionresta);

       var operacionmulti = valor1 * valor2;
       console.log("la multiplicación es igual a " + operacionmulti);

       var operaciondiv = valor1 / valor2;
       console.log("la division es igual a " + operaciondiv);

    }
    
    calculadora(2, 2, 'suma');
