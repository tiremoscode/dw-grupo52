// Funciones

// Funciones normales.
function hacerSuma(valor1, valor2) {
    return valor1 + valor2;
}

// tener su propio contexto de this, que va a variar dependiendo de como y donde sa invocada esta función.

// Funciones Tipo Flecha ó Arrow Functions.

const haremosSuma = (valor1, valor2) => {
    return valor1 + valor2;
}

// Contexto del objeto this.
// Si una plicación yo la ejecuto dentro de un navegador (chrome, firefox, etc) => objeto window.
// Si esta aplicación yo la ejecuto desde NodeJS / Terminal / Consola entoncesmi objeto => objeto global.

// No tiene su propio this. Hereda el this del contexto del cual fueron definidos.

console.log('definicion del objeto this ', this);

// 3. Uso del Objeto.
// Funcion normal -> Vamos a tener acceso al objeto arguments. que contiene todos los parámetros pasados a mi función.
// Función flecha -> No tiene acceso al objeto arguments.

// 4. Forma de invocar o crear nuevos datos.

// función normal. Se usa como constructor y son invocadas a través del objeto new para crear instancias.
// Función flecha. No pueden ser usadas como un constructor, por lo que nos arrojará un error si se intenta invocarla con el objeto new.

// Ejecución.
console.log(hacerSuma(3, 5));
console.log(haremosSuma(4, 6));

// Ejemplo de this en una función normal
const persona = {
    nombre: 'Lizbeth',
    obtenerNombrePersona: function () {
        console.log(this.nombre);
    }
};

persona.obtenerNombrePersona();

// Ejemplo de this en una función arrow

const persona2 = {
    nombre: 'Yadir',
    obtenerNombrePersona: () => {
        console.log(this.nombre);
    }
};
persona2.obtenerNombrePersona();

// Otro ejemplo.
const perro1 = {
    nombre: 'Rex',
    ladrar: function () {
        return `${this.nombre} está ladrando`;
    }
}

console.log(perro1.ladrar());

const perro2 = {
    nombre: 'Rex',
    ladrar: () => `${this.nombre} está ladrando`,
}

console.log(perro2.ladrar());

// ¿Qué tomar en cuenta para usar una funcion normal o una arrow function?

// cuando SI usar función de tipo flecha

const alumna = {
    nombre: 'Alberto',
    saludar: function () {
        setTimeout(() => {
            console.log(this.nombre);
        }, 1000);
    }
};

alumna.saludar();

// Cuando queremos un códio más limpio.

const duplicarValor = (numero) => numero * 2;
console.log(duplicarValor(4));

// Cuando SI usar una función normal.

// 1. Cuando necesitas tener control de this.

function Animal(nombre) {
    this.nombre = nombre;
}

const perro3 = new Animal('Lucas');
console.log(perro3.nombre);

function sumarValores() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

console.log(sumarValores(1, 2, 3, 4, 5, 6));
