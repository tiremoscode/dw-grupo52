// Tipos de Datos en JAvaScript.
// Primitivos / Objetos.
// Primitivos - Números, Cadenas, Booleanos - Number, boolean
// Objetos -> Arreglos o las funciones.

let numero1 = 10;
let numero2 = numero1;
numero2 = 15;

console.log(numero1);
console.log(numero2);

// Pase por referencia.
let obj1 = {
    nombre: 'Kitty'
};

let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.nombre = 'Lizbeth Guadalupe';

console.log(obj1.nombre);
console.log(obj2.nombre);

// "romper" la referencia
// Usando un spread operator (...)

let obj3 = {
    nombre: 'Gemma'
};

let obj4 = {
    ...obj3
};

console.log(obj3);
console.log(obj4);

obj4.nombre = 'Aislin';
console.log(obj3.nombre); // Imprimirá Gemma
console.log(obj4.nombre); // Imprimirá Aislin