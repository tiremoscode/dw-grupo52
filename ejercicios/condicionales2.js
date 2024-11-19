// If y else y Switch
// ¿cuáles son sus diferenciaS?

// if y else
// Permitir evaluar una o más condiciones de tipo booleano.
// Si una conidción es verdadera, se ejecuta el bloque de código correspondiente.

function ejecutaEstaFuncion() {
    console.log('Ejecute esta función');
}

// Estructura básica de un if y un else
if (!condicion1) {
    // Aqui se ejecutará un código si y solo si el valor de condicion1 cumple con nuestra condición solicitado.
    console.log('Condicion 1 si es negativo');
    ejecutaEstaFuncion();
} else if (condicion2) {
    // Aquí se ejecutará este fragmento de código si y solo si el valor de la condicion2 es verdadero y condicion 1 no fue verdadero
} else if (condicion3) {
    // aquí se ejecutará este fragmento de código si y solo si el valor de la condicion3 es verdadero y condicion1 condicion2 no hayan sido verdaderos
} else {
    // Aquí se ejecutará el fragmento de código si ninguna de la condiciones anteriores anteriores fue verdadera.
}

// Switch
// Es la estructura más adecuada cuando tienes múltiples condiciones basadas en el mismo valor.

switch (color) {
    case 'rosa':
        // Fragmento de código que se ejecutará si esta condición se cumple
        console.log('Pintare mi cuarto rosa mexicano');
        ejecutaEstaFuncion();
        break;
    case 'verde':
        // Fragmento de código que se ejecutará si esta condición se cumple
        console.log('Pintare mi cuarto de verde bandera');
        break;
    case 'azul':
        // Fragmento de código que se ejecutará si esta condición se cumple
        console.log('Pintare mi cuarto azul como el cielo');
        break;
    case 'rojo':
        // Fragmento de código que se ejecutará si esta condición se cumple
        console.log('Pintare mi cuarto azul como een el infierno');
        break;
    default:
        console.log('Mejor no pinto porque no me gusto ningún color');
        break;
}