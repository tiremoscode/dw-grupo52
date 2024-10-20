/* Instrucciones de la tarea */

/* Calculadora 
    Suma
    Resta
    Multiplicación
    División 
    
    Crear una función que a través de 3 parámetros
    permita hacer la operación solicitada*/

    let operador = prompt('Que operacion desea hacer: 1- Sumar, 2- Restar, 3-Multiplicar, 4-Dividir');
    let numero1 = Number(prompt('ingrese el primer numero'));
    let numero2 = Number(prompt('Ingrese el segundo numero'));
    let total;


    function total(operador, numero1, numero2){
    if (operador ==1){
        total = numero1 + numero2
        alert('EL resultado de la suma es de '+ total)
    }else if (operador ==2){
        total = numero1- numero2
        alert('EL resultado de la resta es de '+ total)
    }else if (operador ==3){
        total = numero1 * numero2
        alert('EL resultado de la multiplicacion es de '+ total)
    }else if (operador ==4){
        total = numero1 / numero2
        alert('EL resultado de la division es de '+ total)
    }else {
        alert('Opcion de operacion incorrecta')
    }

}


