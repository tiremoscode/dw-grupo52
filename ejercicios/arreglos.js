// Arreglos
// Nos permite almacenar multiples valores dentro de una variable.
// Podemos tener tipo de datos como números, cadenas, objetos, otros arreglos.

// Características
// Indizado. Los elemenetos de mi arreglo serán almacenados en posiiones indexadas, comenzando en 0.
// Dinámicos. Serán dinámicos ya que podremos agregar y eliminar elementode manera fácil.
// Multidimensionales. Podemos crear un arreglo de arreglos.

// Estructura base de un arreglo.
// siempre va a ir entre corchetes, va a ir entre comillas simples, ira separado por comas
// const frutas = ['manzana', 'plátano', 'naranja'];

// Creando un nuevo arreglo
// Creando un arreglo usando la notación de corchetes.
const frutas = ['Manzana', 'Plátano', 'Naranja', 'Pera'];

// Usando el constructor Array.
const verduras = new Array('Lechuga', 'Jitomate', 'Zanahoria');

// Arreglo vacio.
const vacio = [];
const vacioUsandoConstructor = new Array();

console.log(frutas);
console.log(verduras);
console.log(vacio);
console.log(vacioUsandoConstructor);

// Accediendo a un eslemento del arreglo.
console.log(frutas[0]);
console.log(frutas[2]);

// Modificando elementos de mi arreglo.
frutas[1] = 'Kiwi';
console.log(frutas);

// Push. Agrega uno o más elementos al final del arreglo
frutas.push('Mango');
console.log(frutas);

// Pop. Eliminar el último elemento del arreglo y nos lo devuelve.
const frutaEliminada = frutas.pop();
console.log(frutaEliminada);
console.log(frutas);

// Shift. Eliminar el primer elemento del arreglo y nos lo devuelve.
const primerFruta = frutas.shift();
console.log(primerFruta);
console.log(frutas);

// Unshift. Agrega uno o más elemento al inicio del arreglo
frutas.unshift('Fresa');
console.log(frutas);

// Concat. Combinar dos o más arreglos y devuelve un nuevo arreglo.
const otrasFrutas = ['Sandía', 'Piña'];
const todasLasFrutas = frutas.concat(otrasFrutas);
console.log(todasLasFrutas);

// Slice. Devolver una copia de una parte del arreglo como un nuevo arreglo.
const algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas);

// Splice. Cambia el contenido de un arreglo eliminando elementos existentes o agregando a nuevos elementos.
// El primer número indicará la posición de elementos donde se hará la sustitución
// El segundo número indicará el número de elementos a eliminar del arreglo original.
// frutas.splice(0, 2, 'Mora');
// console.log(frutas);

// añadir un caso donde quiero hacer una segunda actualización a mi arreglo
frutas.splice(1, 2, 'Ciruela', 'Papaya');
console.log(frutas);

// forEach. Ejecuta una función proporcionada una vez por cada elemento del arreglo.
frutas.forEach((fruta) => {
    console.log(fruta);
});

// map. Crear un nuevo arreglo con los resultados de aplicar una función a cada elemento de mi arreglo.
const frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasEnMayusculas);

// filter. Crear un nuevo arreglo con todos los elementos que cumplan con cierta condición implmentada dentro de mi función.
const frutasMayoresA4Letras = frutas.filter((fruta) => fruta.length > 4);
console.log(frutasMayoresA4Letras);

// find. Devolver un primer elemento que cumpla con la condición dada en mi arreglo.
const frutasConLetraF = frutas.find((fruta) => fruta.startsWith('f') || fruta.startsWith('F'));
console.log(frutasConLetraF);