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
    if (operacion === 'suma') {
      return valor1 + valor2;
    } else if (operacion === 'resta') {
      return valor1 - valor2;
    } else if (operacion === 'multiplicacion') {
      return valor1 * valor2;
    } else if (operacion === 'division') {
      if (valor2 !== 0) {
        return valor1 / valor2;
      } else {
        return "Error: No se puede dividir entre cero";
      }
    } else {
      return "Error: Operación no válida";
    }
  }
  
  console.log(calculadora(22, 2, 'suma')); 
  console.log(calculadora(22, 2, 'resta')); 
  console.log(calculadora(22, 2, 'multiplicacion')); 
  console.log(calculadora(22, 2, 'division'));