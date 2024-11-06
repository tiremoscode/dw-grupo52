// Tipo de Iteración.
// for. 
// valor de inicio, valor de condición, incremento o decremento

function mostrarInfoDesdeUnCiclo(valor, origen) {
    console.log(valor + ' desde ' + origen);
}

for (let i = 0; i < 10; i++) {
    mostrarInfoDesdeUnCiclo(i, 'for');
}

// while.
// Usaremos este ciclo cuando no sabemos cuántas veces necesitamos hacer una iteración.
// pero es conocida la condición que debe cumplirse para seguir iterando.
let j = 0;
while (j < 10) {
    mostrarInfoDesdeUnCiclo(j, 'while');
    j++;
}

// Do while.
// similar a la estructura de un while, PERO garantiza que el bloque de código se ejecute
// AL MENOS una vez, ya que la condición sera evaluada después de la ejecución del bloque.
let k = 10;
do {
    mostrarInfoDesdeUnCiclo(k, 'do while');
    k++;
} while (k < 10);

const frutas = ['Manzana', 'Plátano', 'Naranja'];

for (const miFruta of frutas) {
    console.log(miFruta);
}

frutas.forEach((fruta) => {
    console.log(fruta);
});

const persona = {
    nombre: 'Yareny',
    edad: 30,
    turno: 'Matutino, Grupo 52'
}

for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}