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
  let resultado;
  if (operacion === "suma") {
    resultado = valor1 + valor2;
  } else if (operacion === "resta") {
    resultado = valor1 - valor2;
  } else if (operacion === "multiplicacion") {
    resultado = valor1 * valor2;
  } else if (operacion === "division") {
    resultado = valor1 / valor2;
  } else {
    resultado = "Operación no válida";
  }
  return resultado;
}

console.log(calculadora(2, 2, "suma"));
console.log(calculadora(6, 3, "resta"));
console.log(calculadora(4, 2, "multiplicacion"));
console.log(calculadora(9, 3, "division"));

