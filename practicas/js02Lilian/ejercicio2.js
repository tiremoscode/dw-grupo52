function calcular(operacion) {
    const valor1 = parseInt(document.getElementById('numero1').value); //Aquí se obtienen los valores de los campos de entrada del HTML usando document.getElementById(). Los valores recuperados son cadenas (strings), por lo que se convierten a enteros utilizando parseInt().
    const valor2 = parseInt(document.getElementById('numero2').value);
    let resultado;// Se  declara una variable para almacenar el resultado de la operación.


    switch (operacion) {//  Según el valor de operacion (que se pasa como argumento desde el botón que se clickea), el código realiza una de las cuatro operaciones aritméticas: sumar, restar, multiplicar o dividir.
        case 'sumar':
            resultado = valor1 + valor2;
            break;
        case 'restar':
            resultado = valor1 - valor2;
            break;
        case 'multiplicar':
            resultado = valor1 * valor2;
            break;
        case 'dividir':// En el caso de la división, se verifica que el divisor (valor2) no sea cero, ya que dividir entre cero no es posible.
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = "No se puede dividir por cero";
            }
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;//Aquí se actualiza el contenido del div con el id="resultado" en el HTML para mostrar el resultado de la operación.
}